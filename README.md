# One Word Story

## Description

One word story is a small browser-based game where participants create randomized one word stories.

Players are connected using [Socket.io](https://github.com/socketio/socket.io)

## Setup

Project structure looks like this:
```
$ > tree -d -L 2
.
├── README.md
├── client
│   ├── README.md
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
└── server
    ├── app.js
    ├── node_modules
    ├── package-lock.json
    └── package.json
```

- ### `client`

```bash
cd client
npm i
npm start
```

- ### `server`

```bash
cd server
npm i
nodemon app.js
```

## For Docker container deployment

In the project root directory, run:
```bash
docker-compose up -d
```
This will spin up a container each of the `client` (UI) and the `server`.

Public Dockerhub images:
- [Client](https://hub.docker.com/r/rishikeshvnair/one-word-story-client)
- [Server](https://hub.docker.com/r/rishikeshvnair/one-word-story-server)

For local Docker image builds, run:
```bash
cd client/
docker build -t one-word-story-client .
docker run one-word-story-client
```
for the `client` and likewise, for `server`.


