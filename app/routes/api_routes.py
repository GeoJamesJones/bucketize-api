from app import app, db

from flask import jsonify, request, send_from_directory, flash, redirect, url_for, render_template
from flask_login import current_user, login_user, login_required, logout_user
from googlesearch import search
from bs4 import BeautifulSoup
from werkzeug.utils import secure_filename


from app.scripts import unzip
from app.scripts import move_files
#from app.scripts import consolidate_elevation
from app.forms.forms import UploadShapes
from app.models.models import Post

import requests
import os
import json
import string
import urllib3
import sys

ALLOWED_EXTENSIONS = set(['zip'])

jobs = {}

@app.route('/api/v1.0/job-info', methods=['GET'])
def job_info():
    return jsonify(jobs)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/v1.0/upload-shapes', methods=['POST', 'GET'])
def upload_shape():
    job_number = int(len(jobs) + 1)
    jobs[job_number] = "Job Recieved"
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            copied_shapes = 'Please submit files as a ZIP file.'
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            copied_shapes = 'error'
            return redirect(request.url)
        if file and allowed_file(file.filename):
            final_folder = app.config['SHAPE_FINAL_FOLDER']
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            if filename.endswith(".zip"):
                dirname = unzip.unzip_file(filename)
                copied_shapes = move_files.copy_directory(dirname,final_folder, "Upload Shapefiles")

        else:
            copied_shapes = 'error'

    elif request.method == 'GET':
        copied_shapes = 'unknown redirect'

    jobs[job_number] = copied_shapes
    return jsonify(copied_shapes)

@app.route('/api/v1.0/upload-elevation', methods=['POST'])
def upload_elev():
    job_number = int(len(jobs) + 1)
    jobs[job_number] = "Job Recieved"
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            if filename.endswith(".zip"):
                final_folder = app.config['ELEV_FINAL_FOLDER']
                dirname = unzip.unzip_file(filename)
                copied_elev = move_files.copy_directory(dirname,final_folder, "Upload Elevation")
                #copied_elev = consolidate_elevation.consolidate_elevation(dirname, )


    jobs[job_number] = copied_elev
    return jsonify(copied_elev)

@app.route('/api/v1.0/upload-raster', methods=['POST'])
def upload_raster():
    job_number = int(len(jobs) + 1)
    jobs[job_number] = "Job Recieved"
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            if filename.endswith(".zip"):
                final_folder = '/Users/jame9353/Documents/temp_data/bucketize/raster'
                dirname = unzip.unzip_file(filename)
                copied_raster = move_files.copy_directory(dirname,final_folder, "Upload Raster")

        jobs[job_number] = copied_raster
        return jsonify(copied_raster)

@app.route('/uploads/shapes', methods=['POST', 'GET'])
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
            #copied_elev = consolidate_elevation.consolidate_elevation(dirname, )

            #return jsonify(copied_shapes)
            return render_template('job_results.html', job=copied_elev)
    return render_template('upload.html', form=form)