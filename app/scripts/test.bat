START "C:\Program Files\ArcGIS\Pro\bin\Python\envs\arcgispro-py3\python.exe"

cd C:\Users\localadmin\Documents\GitHub\bucketize-api\app\scripts

python consolidate_rasters.py -w "C:\egd_cmb\DTED_2" -md "C:\egd_cmb\GeodataManagerOutput_cmb.gdb\DTED_2" -r "Raster Dataset"

echo.>"C:\Users\localadmin\Documents\GitHub\bucketize-api\app\scripts\test.txt"