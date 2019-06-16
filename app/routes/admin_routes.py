from app import app, db
from flask import jsonify, request, send_from_directory, flash, redirect, url_for, render_template
from flask_login import current_user, login_user, login_required, logout_user
from werkzeug.urls import url_parse
from werkzeug.utils import secure_filename
from arcgis.gis import GIS
from arcgis.mapping import WebMap

from app.scripts.get_broken_links import is_url_reachable, test_urls_in_webmap, handle_unreachable, get_items_to_check
from app.forms.forms import GetBrokenLinks
from app.models.models import Post

import requests
import os
import json
import string
import urllib3
import sys

gis_username = os.environ.get('gis_username')
target_password = os.environ.get('gis_password')
gis_url = os.environ.get('gis_url')

target_portal = GIS(gis_url, gis_username, target_password)

@app.route('/api/v1.0/add-user', methods=['POST'])
def add_user():
    # See if the user has firstName and lastName properties

    try:
        first_name = request.form['first-name']
        last_name = request.form['last-name']
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        role = request.form['role']
        organization = request.form['organization']

        # create user
        target_user = target_portal.users.create(username, password, first_name, 
                                                 last_name, email, role)

        if organization == 'EUCOM':
            group = target_portal.groups.search("DC Crime Analysis")[0]
            group.add_users(target_user.username)

        # update user properties
        return "{} successfully added!".format(username)
    
    except Exception as e:
        return str(e)

@app.route('/api/v1.0/get-users', methods=['GET'])
def get_users():
    try:
        users = {}
        source_users = target_portal.users.search('!esri_ & !admin')
        for user in source_users:
            users[user.username] = user.role

        return jsonify(users)
        
    except Exception as e:
        return str(e)

@app.route('/api/v1.0/get-groups', methods=['GET'])
def get_groups():
    try:
        groups = {}
        source_groups = target_portal.groups.search("!owner:esri_* & !Basemaps")
        for group in source_groups:
            groups[group.title] = group.owner

        return jsonify(groups)
        
    except Exception as e:
        return str(e)

@app.route('/api/v1.0/remove-user', methods=['DELETE'])
def remove_user():
    try:
        target_user = target_portal.users.get(request.form['username'])
        if target_user is not None:
            print('Deleting user: ' + target_user.fullName)
            target_user.reassign_to(request.form['reassign-data-to'])
            target_user.delete()
        return "Successfully removed {}".format(request.form['username'])
    except Exception as e:
        return str(e)
        #return 'User {} does not exist in Target Portal'.format(request.form['username'])

@app.route('/admin/check-broken-items', methods=['GET', 'POST'])
@login_required
def check_broken_items():
    form = GetBrokenLinks()

    if form.validate_on_submit():
        try:
            broken_items = []
            checked_items = []
            
            for item in get_items_to_check(target_portal):
                i = {"title":item.title, "type":item.type, "owner":item.owner}
                checked_items.append(i)

                if item.type == "Web Map":
                    reachable, unreachable = test_urls_in_webmap(item)
                    if unreachable:
                        print(f"\nWebmap {item.id} unreachable. Notifying...")
                        items = handle_unreachable(item, reachable, unreachable, target_portal)
                        broken_items.append(items)

            post_body = "Query for portal broken items."
            post = Post(body=post_body, author=current_user)
            db.session.add(post)
            db.session.commit()
            return render_template("get_broken_links_results.html", broken_items=broken_items, checked_items=checked_items)
        except:
            return render_template('500.html'), 500
    return render_template('get_broken_links.html', form=form)

@app.route('/admin/check-federation-status', methods=['GET', 'POST'])
@login_required
def check_federation_status():
    form = GetBrokenLinks()
    if form.validate_on_submit():
        try:
            federated_servers = []
            server_val = []

            portal_mgr = target_portal.admin
            fed_servers = portal_mgr.federation.servers['servers']
            for fed_server in fed_servers:
                server = {
                    "admin_url":fed_server['adminUrl'], 
                    "server_role":fed_server['serverRole'],
                    "server_function":fed_server['serverFunction']
                    }
                federated_servers.append(server)

                val_all = portal_mgr.federation.validate_all()
                val_status = {"val_status":val_all['status']}
                for val in val_all['serversStatus']:
                    s_val = {
                        "status":val['status'],
                        "server_id":val['serverId'],
                        "messages":val['messages']
                    }
                    server_val.append(s_val)

            post_body = "Query for server federation status."
            post = Post(body=post_body, author=current_user)
            db.session.add(post)
            db.session.commit()

            return render_template('check_federation_status_results.html', val_status=val_status, federated_servers=federated_servers, server_val=server_val)
        except Exception as e:
            print(str(e))
    return render_template('check_federation_status.html', form=form)

@app.route('/admin/get-users', methods=['GET', 'POST'])
@login_required
def form_get_users():
    form = GetBrokenLinks()
    if form.validate_on_submit():
        users = []
        source_users = target_portal.users.search('!esri_ & !admin')
        for user in source_users:
            user = {
                "username":user.username,
                "firstname":user.firstName,
                "lastname":user.lastName,
                "email":user.email,
                "licensetype":user.userLicenseTypeId,
                "role":user.role,
                "storageUsage":user.storageUsage,
                "storageQuota":user.storageQuota
            }
            print(user)
            users.append(user)
        return jsonify(users)

    return render_template('get_portal_users.html', form=form)