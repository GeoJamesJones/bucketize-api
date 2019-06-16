import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    NETOWL_KEY = os.environ.get('NETOWL_KEY')
    UPLOAD_FOLDER = r'/Users/jame9353/Documents/temp_data/bucketize/temp'
    SHAPE_FINAL_FOLDER = '/Users/jame9353/Documents/temp_data/bucketize/shapes'
    ELEV_FINAL_FOLDER = '/Users/jame9353/Documents/temp_data/bucketize/elevation'
    NETOWL_FINAL_FOLDER = '/Users/jame9353/Documents/temp_data/bucketize/json'
    CADRG_FINAL_FOLDER = '/Users/jame9353/Documents/temp_data/bucketize/cadrg'
    CIB_FINAL_FOLDER = '/Users/jame9353/Documents/temp_data/bucketize/cib'
    IMAGERY_FINAL_FOLDER = '/Users/jame9353/Documents/temp_data/bucketize/imagery'
    ELEVATION_MOSAIC = ''
    CADRG_MOSAIC = ''
    CIB_MOSAIC = ''
    IMAGERY_MOSAIC = ''
    