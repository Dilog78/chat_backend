# chat
chat app server

```bash
$ npm install
```

## Api

Post
/login
body: username
response: {_id, username, uid}

WebSocket
Events:
"sendmessage"
body: JSON {userid: string, message: string}
Listening
"message"
emit body: {message: string, save_message: boolean}

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

