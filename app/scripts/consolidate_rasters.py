from app import app

import arcpy
import os
import logging

def update_mosaic(workspace, mosaic_dataset, raster_type):

    app.logger.info('Completed copy of data, beginning update of Mosaic Dataset.')
    try:
        arcpy.AddRastersToMosaicDataset_management(mosaic_dataset, raster_type=raster_type, input_path=out_directory)
        mosaic_updated = True
    except Exception as e:
        app.logger.error(str(e))
        mosaic_updated = False 

    app.logger.info("Completed update of Mosaic Dataset")