# Todo lists

## _Step for run todo list server_

#### First step create database

- Open terminal or Editer can use terminal and use command`yarn docker:up` or `docker-compose up -d`
- At todo list folder` cd server -> yarn migration:latest` when run this all scripts database created success!!
- Go to migrations folder has 2 migration files
  - todo list
  - ping pong migration

#### Second step start and run server

- Open terminal at todo lists folder use command `yarn dev:install` or at server folder use `yarn`
- before run yarn success, use command `yarn dev:server` or `yarn dev` at server folder
  - At terminal should display log message `Server connected:3000` (default port is 3000)
  - Use endpoint `localhost/ping` at postman or tool for send API if use `localhost/ping` and response send `{message: ["pong"]}`, it is considered successful in connecting to the server.
