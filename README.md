# Todo lists

## _Step for run todo list server_

#### First step create database

- Open terminal or Editer can use terminal and use command`yarn docker:up` or `docker-compose up -d`
- At todo list folder`yarn migration:latest` when run this scripts database created success!!
- Go to migrations folder has 2 migration files
  - todo list
  - ping pong migration

#### Second step run server and checking database connected

- Open terminal at todo lists folder use command `yarn dep:install`
- before run yarn success, use command `yarn dev`
  - At terminal should display log message `Server connected:3000` (default port is 3000)
  - Use endpoint `localhost/ping` at postman or tool for send API if send require this url `localhost/ping` and return response show
  ```
  [
    {
        "message": "pong"
    }
  ]
  ```
  , it is considered successful in connecting to the server.
