# Required imports
import urllib
import urllib3
import json
import contextlib  ## context manager to clean up resources when exiting a 'with' block

def main(service, script_action):  ## Entry point into the script
    
    # Local variables
    ## Authentication
    adminUser = r"siteadmin"
    adminPass = r"1qasde3!QASDE#"
    ## ArcGIS Server Machine
    server = "agenode08-g4267.agenode.local"
    port = "6443"
    ## Services ("FolderName/ServiceName.ServiceType")
    svc = service

    try:
        # Get ArcGIS Server token
        expiration = 60  ## Token timeout in minutes; default is 60 minutes.
        token = getToken(adminUser, adminPass, server, port, expiration)

        # Perform action on service
        action = script_action  ## "start" or "stop"
        jsonOuput = serviceStartStop(server, port, svc, action, token)
        ## Validate JSON object result
        if jsonOuput['status'] == "success":
            print ("{} {} successful".format(action.title(), str(svc)))
        else:
            print ("Failed to {} {}".format(action, str(svc)))
            raise Exception(jsonOuput)

    except Exception as err:
        print (err)


# Function to generate a token from ArcGIS Server; returns token.
## http://resources.arcgis.com/en/help/arcgis-rest-api/02r3/02r3000000m5000000.htm
def getToken(adminUser, adminPass, server, port, expiration):
    # Build URL
    url = "http://{}:{}/arcgis/admin/generateToken?f=json".format(server, port)

    # Encode the query string
    query_dict = {
        'username': adminUser,
        'password': adminPass,
        'expiration': str(expiration),  ## Token timeout in minutes; default is 60 minutes.
        'client': 'requestip'
    }
    query_string = urllib.urlencode(query_dict)

    try:
        # Request the token
        with contextlib.closing(urllib2.urlopen(url, query_string)) as jsonResponse:
            getTokenResult = json.loads(jsonResponse.read())
            ## Validate result
            if "token" not in getTokenResult or getTokenResult == None:
                raise Exception("Failed to get token: {}".format(getTokenResult['messages']))
            else:
                return getTokenResult['token']

    except urllib2.URLError as e:
        raise Exception("Could not connect to machine {} on port {}\n{}".format(server, port, e))


# Function to start or stop a service on ArcGIS Server; returns JSON response.
## http://resources.arcgis.com/en/help/arcgis-rest-api/02r3/02r3000001s6000000.htm
def serviceStartStop(server, port, svc, action, token):
    # Build URL
    url = "http://{}:{}/arcgis/admin".format(server, port)
    requestURL = url + "/services/{}/{}".format(svc, action)

    # Encode the query string
    query_dict = {
        "token": token,
        "f": "json"
    }
    query_string = urllib.urlencode(query_dict)

    # Send the server request and return the JSON response
    with contextlib.closing(urllib.urlopen(requestURL, query_string)) as jsonResponse:
        return json.loads(jsonResponse.read())

if __name__ == "__main__":
    main("Footprints.MapServer", "start")