---
>-
  A simple backend server that implements the scoring logic in the datahouse assignment.
---

# Description

The server listens on port 8000 and responds to post request on the '/' page. If you are simply interested in the respective logic for data transformation, the file `src/utils.js` details the scoring procedure.

The json parsing is handled by an express middleware.

Requests were tested using `Postman` and sample requests are detailed below. 

This project is packaged via npm(npm and node is pre-requisites for running the project); the respective package.json file contains all required scripts.

In order to the run the project, the dependencies need to be installed first.

--------------------------------------------------------------------------------

To install all dependencies:

```
`npm install`
```

--------------------------------------------------------------------------------

To start the server:

```
`npm start`
```

To run the test cases:

```
`npm test`
```

--------------------------------------------------------------------------------

# File Overview

## src/index.js
Sets up the server: estabishes the post route for the server, installs the json parsing middleware and listens on the specified port.

## src/utils.js
Contains the logic for validating a request, the scoring logic and helper functions. 

## test/testEntry.js
A wrapper testfile that runs all tests. 

## test/testCase.js
Contains and export the testcase provided with the assignment.

# REST API: POST requests

## POST REQUESTS

--------------------------------------------------------------------------------

## POST @ /

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
