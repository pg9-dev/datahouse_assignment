---
  A simple backend server that implements the scoring logic in the datahouse assignment.
---

# Description

The server listens on port 8000 and responds to post request on the '/' page. If you are simply interested in the respective logic for data transformation, the file `src/utils.js` details the scoring procedure.

The server expects and responds with `json`. The json parsing is handled by an express middleware.

This project is packaged via npm(npm and node are pre-requisites for running the project); the respective package.json file contains all required scripts.



--------------------------------------------------------------------------------
#### All commands are to be entered in the home directory of the project. Node.js and npm are a pre-requisites for running the project. 
##### In order to the run the project, the dependencies need to be installed first. To install all dependencies, use:

```
`npm install`
```

--------------------------------------------------------------------------------

##### To start the server, use:

```
`npm start`
```

##### To run the test cases, use:

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
>`Postman was used to test the request and is recommended for running the project

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
