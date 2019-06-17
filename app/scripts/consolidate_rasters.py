#from app import app

import arcpy
import argparse
import os
import logging
import time

def update_mosaic(workspace, mosaic_dataset, raster_type):

    print('Completed copy of data, beginning update of Mosaic Dataset.')
    try:
        arcpy.AddRastersToMosaicDataset_management(mosaic_dataset, raster_type=raster_type, input_path=workspace)
        mosaic_updated = True
    except Exception as e:
        print(str(e))
        mosaic_updated = False 

    print("Completed update of Mosaic Dataset")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("-w", "--workspace", help="Workspace", required=True)
    parser.add_argument("-md", "--mosaic_dataset", help="Mosaic Dataset", required=True)
    parser.add_argument("-r", "--raster_type", help="Raster Type", required=True)
    args = parser.parse_args()

    try:
        print("Beginning Monitor of {}".format(args.workspace))
        before = dict ([(f, None) for f in os.listdir (args.workspace)])
        #before = {}
        count = 0
        errors = 0

        while True:
            
            # Compares the folder contents after the sleep to what existed beforehand, and makes a list of adds and removes
            after = dict ([(f, None) for f in os.listdir(args.workspace)])
            added = [f for f in after if not f in before]
            removed = [f for f in before if not f in after]

            #if added: print("Added: ", ", ".join (added))
            #if removed: print("Removed: ", ", ".join (removed))
            before = after

            if len(added) > 0:
                print("Upload Detected, allowing copy to finish...")
                time.sleep(15)
                

                update_mosaic(args.workspace, args.mosaic_dataset, args.raster_type)
    except Exception as e:
        print(str(e))

if __name__ == "__main__":
    main()