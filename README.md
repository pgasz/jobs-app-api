# jobs-app-api
This is the backend for my jobs app, which is written in node.js. My main goal was to implement authentication and full REST API. You can simply register and start storing your job offers in one place. 
I host my API on heroku where you can send some requests.
I would like to thank my friend for his invaluable help in working on the frontend. \
You can check my work not only using for example the Postman but also on my website. \
Check it out [here - my website](https://www.jobs-app.pgasz.pl/ "here - my website"). \
If you prefer sending some requests, send them to https://jobs-api-pgasz.herokuapp.com/api/v1/

## Languages and technologies
- Node.js / Express.js
- the NoSQL database - MongoDB (hosted on Atlas)
- database framework Mongoose
- strong SHA-256 cryptography (using bcryptjs library)
- JWT (using jsonwebtoken library)
- security libraries (rate-limiter, helmet, xss-clean, cors)
- frontend React.js

## Overview
Check it out [here - my website](https://www.jobs-app.pgasz.pl/ "here - my website"). \
If you prefer sending some requests, send them to:
https://jobs-api-pgasz.herokuapp.com/api/v1/

<h6 align="center">
Dashboard
</h6>
<p align="center">
  <img src="https://www.pgasz.pl/readme/jobs-app-api/dashboard-all-jobs.PNG" alt="Dashboard"/>
</p>

<h6 align="center">
Home Page
</h6>
<p align="center">
  <img src="https://www.pgasz.pl/readme/jobs-app-api/home-page.PNG" alt="HOME PAGE"/>
</p>

<h6 align="center">
Edit a specific job offer 
</h6>
<p align="center">
  <img src="https://www.pgasz.pl/readme/jobs-app-api/edit-with-feedback.PNG" alt="Edit"/>
</p>

<h6 align="center">
Register / Login Page
</h6>
<p align="center">
  <img src="https://www.pgasz.pl/readme/jobs-app-api/register-login.PNG" alt="Register / Login"/>
</p>

<h6 align="center">
Create / Edit / Delete
</h6>
<p align="center">
  <img src="https://www.pgasz.pl/readme/jobs-app-api/edit-delete-create-logout.PNG" alt="Edit / Delete / Create"/>
</p>


## Features
- storing job offers in the database
- easy registration (with some validation)
- convenient JSON form of sent data
- REST API
- user-friendly layout
- easy to install, comfortable to use
- custom error system
- safe user login (hashed password, authenticate by generating token)

### Errors
I created custom errors in the Errors directory. This in combination with middlewares helped me with debugging process.
- If email or password is missing, throw BadRequestError
- If email or password is missing, throw BadRequestError
- If no user or password does not match, throw UnauthenticatedError
###### Mongoose Errors:
- Validation Errors
- Duplicate (Email)
- Cast Error

## API endpoints
There are two separate routes: auth and jobs. The first one is for registration and login. The second one is responsible for REST API for storing job offers.

### Auth
#### register
method: POST \
endpoint: '/auth/register' \
description: create a new user \
JSON structure: \
`{"name": "your name", "email": "your email", "password": "your password"}`

#### login
method: POST \
endpoint: '/auth/login' \
description: authenticate yourself \
JSON structure:  \
`{"email": "your email", "password": "your password"}`



### Jobs REST API
For each request, you should add the "Authorization" header with "Bearer {yous token}".

#### get jobs
method: GET \
endpoint: '/jobs' \
description: get all of user jobs

#### create a job
method: POST \
endpoint: '/jobs' \
description: create a new job \
JSON structure:   \
`{ "company": "your company", "position": "your position", "status": "your status"}` \
(only 3 status are valid: ['interview', 'declined', 'pending'])

#### get a job
method: GET \
endpoint: '/jobs/:id' \
description: get a specific job

#### update a job
method: PATCH \
endpoint: '/jobs/:id' \
description: update a specific job \
JSON structure: watch [create a job structure](#create-a-job "create a job")  \
for example: `{"company": "your company", "position": "your position"}`

#### delete a job
method: DELETE \
endpoint: '/jobs/:id' \
description: delete a specific job


## Installation
You should have installed node.js ( [check documentation](https://nodejs.org/en/ "check documentation") ) and npm ( [check documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "check documentation") ) on your computer. These two are required to run this project locally.
1. Download file (clone repository or download and extend zip)
2. Open your terminal in the project directory and type 2 commands: \
   `npm install` 
   \
    `npm start` \
Now you are ready to use the project locally. Have fun! :-D

### Authors
- [pgasz](https://github.com/pgasz "pgasz")
