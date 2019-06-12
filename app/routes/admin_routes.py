from app import app
from flask import jsonify, request, send_from_directory, flash, redirect, url_for
from arcgis.gis import GIS

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
        return jsonify(target_user)
    
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

