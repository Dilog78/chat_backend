# chat
chat app server

```bash
$ npm install
```

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

## Api

Post
/registration
body: username, email, password,
response: {username, email, user_id}

Post
/login
body: email, password,
response: {username, email, user_id}

