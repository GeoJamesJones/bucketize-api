#from app import app

import arcpy
import os
import logging
import time

def update_footprints():

    print('Beginning update of footprints.')
    try:
        schemaType = "NO_TEST"
        fieldMappings = ""
        subtype = ""
        temp_file = 'in_memory\footprints'
        arcpy.CopyFeatures_management(r'C:\egd_cmb\GeodataManagerOutput_cmb.gdb\all_services\Footprint', temp_file)
        arcpy.Append_management(temp_file, r'C:\egd_cmb\GeodataManagerOutput_cmb.gdb\service_footprints', schemaType, fieldMappings, subtype)
        
        mosaic_updated = True
    except Exception as e:
        print(str(e))
        mosaic_updated = False 

    print("Completed update of Mosaic Dataset")

def main():

    try:
        update_footprints()
    except Exception as e:
        print(str(e))

if __name__ == "__main__":
    main()