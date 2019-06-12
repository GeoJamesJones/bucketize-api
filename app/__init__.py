import logging

from flask import Flask
from config import Config
from werkzeug.utils import secure_filename
from logging.handlers import RotatingFileHandler

UPLOAD_FOLDER = r'/Users/jame9353/Documents/temp_data/bucketize'

app = Flask(__name__)
app.config.from_object(Config)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

app.logger.info("Starting API...")

from app.routes import routes, admin_routes