from app import app
from flask import jsonify, request, send_from_directory, flash, redirect, url_for
from werkzeug.utils import secure_filename

from app.scripts import process_netowl

import requests
import os
import json
import string
import urllib3
import sys

jobs = {}

netowl_key = os.environ.get('NETOWL_KEY')

ALLOWED_EXTENSIONS = set(['doc', 'docx', 'txt', 'htm', 'html', 'pdf'])

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/v1.0/netowl-doc', methods=['POST'])
def netowl_doc():
    try:
        job_number = int(len(jobs) + 1)
        jobs[job_number] = "Job Recieved"
        if request.method == 'POST':

            if 'file' not in request.files:
                flash('No file part')
                return redirect(request.url)
            
            file = request.files['file']
            
            if file.filename == '':
                flash('No selected file')
                return redirect(request.url)
            
            if file and allowed_file(file.filename):
                final_folder = '/Users/jame9353/Documents/temp_data/bucketize/json'
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                uploaded_file = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                process_netowl.netowl_curl(uploaded_file, final_folder, ".json", netowl_key)
                with open(os.path.join(final_folder, filename +'.json'), 'rb') as json_file:
                    data = json.load(json_file)

                entity_list, links_list, events_list = process_netowl.process_netowl_json(file.filename, data)

                spatial_entities = []
                nonspatial_entities = []

                for entity in entity_list:
                    if entity.geo_entity == True:
                        spatial_entities.append(vars(entity))
                    else:
                        nonspatial_entities.append(vars(entity))

                return jsonify(spatial_entities)
                
    except Exception as e:
        return str(e)