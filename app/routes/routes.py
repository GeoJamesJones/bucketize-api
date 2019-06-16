import os
import urllib3
import json

from datetime import datetime
from flask import jsonify, request, send_from_directory, flash, redirect, url_for, render_template
from flask_login import current_user, login_user, login_required, logout_user
from werkzeug.urls import url_parse
from werkzeug.utils import secure_filename

from app import app, db
from app.scripts import process_netowl, unzip, move_files
#from app.scripts import consolidate_rasters
from app.forms.forms import LoginForm, RegistrationForm, UploadForm, UploadShapes, UploadImagery
from app.models.models import User, Post, NetOwl_Entity

from config import Config

urllib3.disable_warnings()

@app.before_request
def before_request():
    if current_user.is_authenticated:
        current_user.last_seen = datetime.utcnow()
        db.session.commit()

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('index')
        return redirect(next_page)
    return render_template('login.html', title='Sign In', form=form)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, you are now a registered user!')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)

@app.route('/')
@app.route('/index')
@login_required
def index():
    return render_template('index.html', title='WDC Integration API')


@app.route('/ease-of-use')
@login_required
def ease_of_use():
    return render_template('base_map.html')

@app.route('/user/<username>')
@login_required
def user(username):
    user = User.query.filter_by(username=username).first_or_404()
    posts = user.posts.order_by(Post.timestamp.desc())
    return render_template('user.html', user=user, posts=posts)

@app.route('/upload', methods=['GET', 'POST'])
@login_required
def upload():
    form = UploadForm()
    if form.validate_on_submit():
        f = form.upload.data
        filename = secure_filename(f.filename)
        f.save(os.path.join(
            app.config['UPLOAD_FOLDER'], 'documents', filename
        ))
        post_body = "Document: " + filename
        post = Post(body=post_body, author=current_user)
        db.session.add(post)
        
        final_folder = app.config['NETOWL_FINAL_FOLDER']
        uploaded_file = os.path.join(app.config['UPLOAD_FOLDER'], 'documents', filename)
        process_netowl.netowl_curl(uploaded_file, final_folder, ".json", app.config['NETOWL_KEY'])
        with open(os.path.join(final_folder, filename +'.json'), 'rb') as json_file:
            data = json.load(json_file)

        entity_list = process_netowl.process_netowl_json(f.filename, data)

        spatial_entities = []
        nonspatial_entities = []

        for entity in entity_list:
            if entity.geo_entity == True:
                spatial_entities.append(vars(entity))
                """try:
                    no_entity = NetOwl_Entity(
                            geoentity=entity['geo_entity'],
                            geosubtype=entity['geo_subtype'],
                            geotype=entity['geo_type'],
                            entity_id=entity['id'],
                            lat=entity['lat'],
                            lon=entity['long'],
                            norm=entity['norm'],
                            ontology=entity['ontology'],
                            pretext=entity['pre_text'],
                            value=entity['value'],
                            posttext=entity['post_text'],
                            user_id=current_user)
                except Exception as e:
                    return str(e)"""
            else:
                nonspatial_entities.append(vars(entity))

        os.remove(uploaded_file)
        os.remove(os.path.join(final_folder, filename +'.json'))

        db.session.commit()

        return render_template('results.html', query=spatial_entities)

        #return redirect(url_for('index'))

    return render_template('upload.html', form=form)

@app.route('/uploads/shapes', methods=['POST', 'GET'])
@login_required
def form_upload_shapes():
    form = UploadShapes()
    if form.validate_on_submit():
        if form.datatype.data == 'Shapefile':
            f = form.upload.data
            filename = secure_filename(f.filename)
            f.save(os.path.join(
                app.config['UPLOAD_FOLDER'], 'shapefiles', filename
            ))
            post_body = "Shapefiles: " + filename
            post = Post(body=post_body, author=current_user)
            db.session.add(post)
            db.session.commit()
            final_folder = app.config['SHAPE_FINAL_FOLDER']
            dirname = unzip.unzip_file(os.path.join(app.config['UPLOAD_FOLDER'], 'shapefiles', filename))
            copied_shapes = move_files.copy_directory(dirname,final_folder, "Upload Shapefiles")

            #return jsonify(copied_shapes)
            return render_template('job_results.html', job=copied_shapes)
        elif form.datatype.data == "Elevation":
            f = form.upload.data
            filename = secure_filename(f.filename)
            f.save(os.path.join(
                app.config['UPLOAD_FOLDER'], 'elev', filename
            ))
            post_body = "Elevation Data: " + filename
            post = Post(body=post_body, author=current_user)
            db.session.add(post)
            db.session.commit()
            final_folder = app.config['ELEV_FINAL_FOLDER']
            dirname = unzip.unzip_file(os.path.join(app.config['UPLOAD_FOLDER'], 'elev', filename))
            copied_elev = move_files.copy_directory(dirname,final_folder, "Upload Elevation")
            #consolidate_rasters.update_mosaic(final_folder, app.config['ELEVATION_MOSAIC'])

            #return jsonify(copied_shapes)
            return render_template('job_results.html', job=copied_elev)
    return render_template('upload.html', form=form)

@app.route('/uploads/imagery', methods=['POST', 'GET'])
@login_required
def form_upload_imagery():
    form = UploadImagery()
    if form.validate_on_submit():
        if form.datatype.data == 'cadrg':
            f = form.upload.data
            filename = secure_filename(f.filename)
            if os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'], 'cadrg')) == False:
                os.mkdir(os.path.join(app.config['UPLOAD_FOLDER'], 'cadrg'))
            f.save(os.path.join(
                app.config['UPLOAD_FOLDER'], 'cadrg', filename
            ))
            post_body = "CADRG: " + filename
            post = Post(body=post_body, author=current_user)
            db.session.add(post)
            db.session.commit()
            os.mkdir(os.path.join(app.config['CADRG_FINAL_FOLDER'], filename.split(".")[0]))
            final_folder = os.path.join(app.config['CADRG_FINAL_FOLDER'], filename.split(".")[0])
            dirname = unzip.unzip_file(os.path.join(app.config['UPLOAD_FOLDER'], 'cadrg', filename))
            copied_imagery = move_files.copy_directory(dirname,final_folder, "Upload CADRG")
            #consolidate_rasters.update_mosaic(final_folder, app.config['CADRG_MOSAIC'])

            #return jsonify(copied_shapes)
            return render_template('job_results.html', job=copied_imagery)
        elif form.datatype.data == 'cib':
            f = form.upload.data
            filename = secure_filename(f.filename)
            if os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'], 'cib')) == False:
                os.mkdir(os.path.join(app.config['UPLOAD_FOLDER'], 'cib'))
            f.save(os.path.join(
                app.config['UPLOAD_FOLDER'], 'cib', filename
            ))
            post_body = "CIB: " + filename
            post = Post(body=post_body, author=current_user)
            db.session.add(post)
            db.session.commit()
            os.mkdir(os.path.join(app.config['CIB_FINAL_FOLDER'], filename.split(".")[0]))
            final_folder = os.path.join(app.config['CIB_FINAL_FOLDER'], filename.split(".")[0])
            dirname = unzip.unzip_file(os.path.join(app.config['UPLOAD_FOLDER'], 'cib', filename))
            copied_imagery = move_files.copy_directory(dirname,final_folder, "Upload CIB")
            #consolidate_rasters.update_mosaic(final_folder, app.config['CIB_MOSAIC'])

            #return jsonify(copied_shapes)
            return render_template('job_results.html', job=copied_imagery)
        elif form.datatype.data == 'imagery':
            f = form.upload.data
            filename = secure_filename(f.filename)
            if os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'], 'imagery')) == False:
                os.mkdir(os.path.join(app.config['UPLOAD_FOLDER'], 'imagery'))
            f.save(os.path.join(
                app.config['UPLOAD_FOLDER'], 'imagery', filename
            ))
            post_body = "Imagery: " + filename
            post = Post(body=post_body, author=current_user)
            db.session.add(post)
            db.session.commit()
            os.mkdir(os.path.join(app.config['IMAGERY_FINAL_FOLDER'], filename.split(".")[0]))
            final_folder = os.path.join(app.config['IMAGERY_FINAL_FOLDER'], filename.split(".")[0])
            dirname = unzip.unzip_file(os.path.join(app.config['UPLOAD_FOLDER'], 'imagery', filename))
            copied_imagery = move_files.copy_directory(dirname,final_folder, "Upload Imagery")
            #consolidate_rasters.update_mosaic(final_folder, app.config['IMAGERY_MOSAIC'])

            #return jsonify(copied_shapes)
            return render_template('job_results.html', job=copied_imagery)
    return render_template('upload.html', form=form)