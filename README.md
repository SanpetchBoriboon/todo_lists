# Todo lists

## _Step for run todo list server_

```
  - yarn docker:up / docker-compose up -d
  - yarn dep:install
  - yarn migration
  - yarn dev
```

#### First step create database

- Open terminal or Editer can use terminal and use command`yarn docker:up` or `docker-compose up -d`
- At todo list folder`yarn migrations` when run this scripts database created success!!
- Go to migrations folder has 2 migration files
  - todo list
  - ping pong migration

#### Second step run server and checking database connected

- Create `.env` in server
  - template cofig
  ```
    DATABASE_URL= 'database url postgres'
    PORT= __PORT__
  ```
- Open terminal at todo lists folder use command `yarn dep:install`
- before run yarn success, use command `yarn dev`
  - At terminal should display log message `Server connected:3000` (default port is 3000)
  - Use endpoint `localhost/ping` at postman or tool for send API if send require this url `localhost/ping` and return response should show
  ```
  [
    {
        "message": "pong"
    }
  ]
  ```
  , it is considered successful in connecting to the server.
