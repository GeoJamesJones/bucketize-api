import os
basedir = os.path.abspath(os.path.dirname(__file__))

def get_env_variable(name):
    try:
        return os.environ[name]
    except KeyError:
        message = "Expected environment variable '{}' not set.".format(name)
        raise Exception(message)



class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    # the values of those depend on your setup
    POSTGRES_URL = "wdcdefense.esri.com"
    POSTGRES_USER = "postgres"
    POSTGRES_PW = "H0neyBadger5"
    POSTGRES_DB = "jones"
    #SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(user=POSTGRES_USER,pw=POSTGRES_PW,url=POSTGRES_URL,db=POSTGRES_DB)
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    NETOWL_KEY = os.environ.get('NETOWL_KEY')
    NETOWL_INT_FOLDER = r'C:\content\netowl'
    UPLOAD_FOLDER = r'C:\content\upload'
    SHAPE_FINAL_FOLDER = r'C:\content\shapefiles'
    ELEV1_FINAL_FOLDER = r'C:\egd_cmb\DTED_1'
    ELEV2_FINAL_FOLDER = r'C:\egd_cmb\DTED_2'
    ELEV_FINAL_FOLDER = r'C:\egd_cmb\DTED_SRTM'
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
    GEOEVENT_URL = r'https://esri-kbi-ge.mstacticalcloud.net/geoevent/rest/receiver/bing-query-in'
    CA_QUERY_DASHBOARD = r'http://esrifederal.maps.arcgis.com/apps/opsdashboard/index.html#/58b148c5d462495386593ba953eed90a'
    REDIS_URL = os.environ.get('REDIS_URL') or 'redis://'
    