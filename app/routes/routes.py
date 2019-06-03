from app import app

from flask import jsonify, request
from googlesearch import search
from bs4 import BeautifulSoup

from app.scripts import process_netowl

import requests
import os
import json
import string
import urllib3
import sys

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route('/api/v1.0/bucketize', methods=['GET', 'POST'])
def bucketize():
    return jsonify({'text':request.values})