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
    NETOWL_INT_FOLDER = r'/Users/jame9353/Documents/temp_data/bucketize/json'
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
    GIS_USERNAME = os.environ.get('gis_username')
    GIS_PASSWORD = os.environ.get('gis_password')
    GIS_URL = os.environ.get('gis_url')
    GEOEVENT_URL = r'https://wdcrealtimeevents.esri.com:6143/geoevent/rest/receiver/ca-query-in'
    CA_QUERY_DASHBOARD = r'http://esrifederal.maps.arcgis.com/apps/opsdashboard/index.html#/58b148c5d462495386593ba953eed90a'
    REDIS_URL = os.environ.get('REDIS_URL') or 'redis://'
    