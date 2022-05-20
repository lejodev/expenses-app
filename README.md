# Expenses app client

This is the client version of the expenses app.

## Technologies

- ReactJs
- JavaScript
- Sass

## Test locally with Docker

- It's necessary to have docker installed on your machine

- Once on the project root. Type  
`docker build -t expenses-app-image .`

- Once you have the Docker image on your local. Type  `docker run -d --name expenses-app-container -p 3001:3000 expenses-app`

- Then. You can run your this project on `http://localhost:3001`

## Run locally with NPM

- Clone this repository on your machine

- Open a terminal in the folder of the project

- Once inside this repo run `npm install`

- Then, type run `npm run start` to run this project on your default browser.
