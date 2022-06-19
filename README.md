# exclusible_challenge
Simple app for user registering API with NodeJS, that will be consumed by a React/NextJS front end.


# Exclusible Tech Coding Challenge

## Simple app using using a NodeJS backend consumed by a NextJS frontend. This app allows the client to manage a database of users (CRUD) and retrieve BTCUSD exchange rate.

Status: This backend is currently under active development and might not be ready for heavy production use

## Features

- User Registration and full authentication flow with JWT
- Manage users (Register new users, delete old ones)
- Websocket with subscription for the exchange rate of BTCUSD on the backend


### To Do

- Subscription for Exchange rate of BTCUSD on the frontend
- Configurable spread on the admin panel to calculate the BTCUSD exchange rate
- Unit testing (Jest)
- Documentation generation


## Used technologies

- Docker
- NodeJS, ExpressJS, Typescript
- MongoDB Atlas, Mongoose
- Bcrypt, JWT, CookieParser, Cors




## Get it Running

### Clone the repo
```
git clone https://github.com/leeandroleeite/exclusible_challenge.git
```

### Install the required Dependencies
```
docker pull node:latest
```

### Build docker images and run the app
```
docker compose up --build
```

### Use the app on your browser:
```
http://localhost:3000
```

## API Documentation
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.postman.co/run-collection/04a5c439f668951a6934?action=collection%2Fimport)