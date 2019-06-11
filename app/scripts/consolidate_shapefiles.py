from app import app
from logging.handlers import RotatingFileHandler

import os
import arcpy


def consolidate_shapefiles(folder_path):
    app.logger.info('Received folder path: {}'.format(folder_path))
    out_directory = r'C:\data\shapes'

    walk = arcpy.da.Walk(folder_path, datatype="FeatureClass")

    copied_files = []
    error_files = []

    for dirpath, dirnames, filenames in walk:
        for filename in filenames:
            app.logger.info(filename)
            current_file = os.path.join(dirpath, filename)
            out_file = os.path.join(out_directory, filename)
            app.logger.info(out_file)
            try:
                if arcpy.Exists(current_file) == True:
                    app.logger.info('{} exists'.format(current_file))
                    if arcpy.Exists(out_directory) == True:
                        arcpy.CopyFeatures_management(in_features=current_file, out_feature_class=out_file)
                        app.logger.info("Successfully copied {}".format(out_file))
                        copied_files.append(out_file)
                    else:
                        app.logger.info("Ouput directory does not exist or is inaccessible. " + str(out_directory))
            except Exception as e:
                app.logger.error(str(e))
                error_files.append(current_file)

    return {"job-type":"upload shapefiles","copied-files":copied_files, "error-files":error_files}