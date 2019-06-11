from app import app
import os
import shutil

def copy_directory(input_directory, out_directory, job_type):
    app.logger.info('Received folder path: {}'.format(input_directory))
        
    copied_files = []
    error_files = []


    for root, dirnames, filenames in os.walk(input_directory):
        try:
            for dirname in dirnames:
                source_dir = os.path.join(root, dirname)
                shutil.copy(source_dir, out_directory)
                app.logger.info("Successfully copied {}".format(dirname))
        except Exception as e:
            app.logger.error(str(e))
            error_files.append(dirname)
        try:
            for file in filenames:
                source_file = os.path.join(root, file)
                shutil.copy(source_file, out_directory)
                copied_files.append(file)
                app.logger.info("Successfully copied {}".format(file))
        except Exception as e:
            app.logger.error(str(e))
            error_files.append(file)


    return {"job-type":job_type,"copied-files":copied_files, "error-files":error_files}
            
    