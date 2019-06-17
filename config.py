import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    NETOWL_KEY = os.environ.get('NETOWL_KEY')
    UPLOAD_FOLDER = r'C:\content\upload'
    SHAPE_FINAL_FOLDER = r'C:\content\shapefiles'
    ELEV1_FINAL_FOLDER = r'C:\egd_cmb\DTED_1'
    ELEV2_FINAL_FOLDER = r'C:\egd_cmb\DTED_2'
    NETOWL_FINAL_FOLDER = r'C:\content\netowl'
    CADRG_FINAL_FOLDER = r'C:\egd_cmb\CADRG'
    CIB_FINAL_FOLDER = r'C:\egd_cmb\CIB_5'
    IMAGERY_FINAL_FOLDER = r'C:\egd_cmb\IMAGERY'
    ELEVATION1_MOSAIC = r'C:\egd_cmb\GeodataManagerOutput_cmb.gdb\DTED_1'
    ELEVATION2_MOSAIC = r'C:\egd_cmb\GeodataManagerOutput_cmb.gdb\DTED_2'
    CADRG_MOSAIC = r'C:\egd_cmb\GeodataManagerOutput_cmb.gdb\cmb_scannedMaps'
    CIB_MOSAIC = r'C:\egd_cmb\GeodataManagerOutput_cmb.gdb\CIB_5'
    IMAGERY_MOSAIC = r'C:\egd_cmb\GeodataManagerOutput_cmb.gdb\cmb_Imagery'
    GIS_USERNAME = os.environ.get('gis_username')
    GIS_PASSWORD = os.environ.get('gis_password')
    GIS_URL = os.environ.get('gis_url')
    