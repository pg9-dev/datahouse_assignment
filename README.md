---
>-
  A simple backend server that implements the scoring logic in the datahouse
  assignment.
---

# Table of Content
---
[Description](https://github.com/pg9-dev/datahouse_assignment#description)
[Instructions to Run](https://github.com/pg9-dev/datahouse_assignment#Instructions-to-Run)
[File Overview](https://github.com/pg9-dev/datahouse_assignment#file-overview)
[REST API: POST requests](https://github.com/pg9-dev/datahouse_assignment#rest-api-post-requests)
[Sample curl request for testing the / route](https://github.com/pg9-dev/datahouse_assignment#Curl-Sample)

# Description

The server listens on port 8000 and responds to post request on the '/' page. If you are simply interested in the respective logic for data transformation, the file `src/utils.js` details the scoring procedure.

The server expects and responds with `json`. The json parsing is handled by an express middleware.

This project is packaged via npm(npm and node are pre-requisites for running the project); the respective package.json file contains all required scripts.

The application inputs/outputs as a standard API. For a quick demo, you can type the [curl](https://github.com/pg9-dev/datahouse_assignment#Curl-Sample) request in terminal after running the server.  

--------------------------------------------------------------------------------

# Instructions to Run

## All commands are to be entered in the home directory of the project. Node.js and npm are a pre-requisites for running the project.

### In order to the run the project, the dependencies need to be installed first. To install all dependencies, use:

```
`npm install`
```

--------------------------------------------------------------------------------

### To start the server, use:

```
`npm start`
```

### To run the test cases, use:

```
`npm test`
```

--------------------------------------------------------------------------------

# File Overview

## src/index.js

Sets up the server: establishes the POST route for the server, installs the json parsing middleware and listens on the specified port.

## src/utils.js

Contains the logic for validating a request, the scoring logic and helper functions.

## test/testEntry.js

A wrapper testfile that runs all tests.

## test/testCase.js

Contains and exports the testcase provided with the assignment.

# REST API: POST requests

## Sample POST request @ /

> `Postman was used to test the requests and is recommended for testing the project

```json
Body
{
  "team" : [
        { 
            "name" : "Eddie",
            "attributes" : {
                "intelligence" : 1,
                "strength" : 5,
                "endurance" : 3,
                "spicyFoodTolerance" : 1
            }
        }, {
            "name" : "Will",
            "attributes": {
                "intelligence" : 9,
                "strength" : 4,
                "endurance" : 1,
                "spicyFoodTolerance" : 6
        }
    }
  ],
  "applicants" : [
        {
            "name" : "John",
            "attributes": {
                "intelligence" : 4,
                "strength" : 5,
                "endurance" : 2,
                "spicyFoodTolerance" : 1
            }
        }]
}
```

## Expected Response

```json
{
    "applicants": [
        {
            "name": "John",
            "score": 0
        }
    ]
}
```

# Curl Sample
## Sample curl request for testing the `/` route
The query is passed into the curl command and can be changed to reflect a different input. 
```
curl -d '{
  "team" : [
        { 
            "name" : "Eddie",
            "attributes" : {
                "intelligence" : 1,
                "strength" : 5,
                "endurance" : 3,
                "spicyFoodTolerance" : 1
            }
        }, {
            "name" : "Will",
            "attributes": {
                "intelligence" : 9,
                "strength" : 4,
                "endurance" : 1,
                "spicyFoodTolerance" : 6
        }
    }
  ],
  "applicants" : [
        {
            "name" : "John",
            "attributes": {
                "intelligence" : 4,
                "strength" : 5,
                "endurance" : 2,
                "spicyFoodTolerance" : 1
            }
        }]
}' -H "Content-Type: application/json" -X POST http://localhost:8000
```
