from app import app

from flask import jsonify, request, send_from_directory, flash, redirect, url_for
from googlesearch import search
from bs4 import BeautifulSoup
from werkzeug.utils import secure_filename

from app.scripts import unzip
from app.scripts import move_files

import requests
import os
import json
import string
import urllib3
import sys

ALLOWED_EXTENSIONS = set(['zip'])

jobs = {}

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

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
            copied_shapes = 'error'
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            copied_shapes = 'error'
            return redirect(request.url)
        if file and allowed_file(file.filename):
            final_folder = r'D:\shapes'
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
                final_folder = r'D:\elevation'
                dirname = unzip.unzip_file(filename)
                copied_elev = move_files.copy_directory(dirname,final_folder, "Upload Elevation")


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
                final_folder = r'D:\raster'
                dirname = unzip.unzip_file(filename)
                copied_raster = move_files.copy_directory(dirname,final_folder, "Upload Raster")

        jobs[job_number] = copied_raster
        return jsonify(copied_raster)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'],
                               filename)
