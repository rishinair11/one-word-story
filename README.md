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

- ### Setup `client`

```bash
cd client
npm i
npm start
```

- ### Setup `server`

```bash
cd server
npm i
nodemon app.js
```


