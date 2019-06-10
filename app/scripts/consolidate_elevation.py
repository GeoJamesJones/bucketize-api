from app import app

import arcpy
import os
import logging

def consolidate_elevation(folder_path, mosaic):
    workspace = folder_path
    out_directory = 'C:\data\elevation'
    mosaic_dataset = mosaic

    walk = arcpy.da.Walk(workspace, topdown=True, datatype="RasterDataset")

    app.logger.info("Discovering Items...")

    copied_files = []
    error_files = []

    for dirpath, dirnames, filenames in walk:
        # Disregard any folder named 'back_up' in creating list of rasters
        for filename in filenames:
            if "thumb" not in filename:
                try:
                    in_file = os.path.join(dirpath, filename)
                    out_file = os.path.join(out_directory, filename + ".tif")
                    if arcpy.Exists(out_file) == False:
                        app.logger.info("Moving {}".format(filename))
                        arcpy.AddMessage("Copying {0} to {1}".format(filename, out_directory))
                        arcpy.CopyRaster_management(in_file, out_file)
                        copied_files.append(filename)
                        app.logger.info("Successfully moved {}".format(filename))
                    else: 
                        arcpy.AddMessage(" {0} already exists in {1}, passing".format(filename, out_directory))
                except Exception as e:
                    app.logger.error(str(e))
                    error_files.append(filename)

    app.logger.info('Completed copy of data, beginning update of Mosaic Dataset.')

    try:
        arcpy.AddRastersToMosaicDataset_management(
            mosaic_dataset, "Raster Dataset", 
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
    return {"job-type":"upload elevation data", "copied-files":copied_files, "error-files":error_files, "mosaic-path":mosaic, "mosaic-updated":mosaic_updated}