from app import app

import arcpy
import os
import logging

def update_mosaic(workspace, mosaic_dataset, raster_type):

    app.logger.info('Completed copy of data, beginning update of Mosaic Dataset.')
    try:
        arcpy.AddRastersToMosaicDataset_management(
            mosaic_dataset, raster_type=raster_type, 
            out_directory, "UPDATE_CELL_SIZES", "UPDATE_BOUNDARY",
            "UPDATE_OVERVIEWS", "2", "#", "#", "#",
            "*.tif", "SUBFOLDERS", "EXCLUDE_DUPLICATES",
            "NO_PYRAMIDS", "NO_STATISTICS", "BUILD_THUMBNAILS", 
            "", "","NO_STATISTICS", "", "USE_PIXEL_CACHE")
            mosaic_updated = True
    except Exception as e:
        app.logger.error(str(e))
        mosaic_updated = False 

    app.logger.info("Completed update of Mosaic Dataset")