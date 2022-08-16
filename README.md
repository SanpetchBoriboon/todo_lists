# Todo lists

## _Step for run todo list server_

```
  - yarn docker:up / docker-compose up -d
  - yarn dep:install
  - yarn migrations
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
    database_url= 'database url postgres'
    port='port number'
    environment='production flag'
    base_url='url' (default http://localhost)
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

#### Route path

##### todo-list routes

```
  get all:
    method: GET
    path: /list
  get by id:
    method: GET
    path: /list/:id - :id is number
  add:
    method: POST
    path: /list
    body:{
      title: "title",
      description: "description"
    }
  edit:
    method: PATCH
    path: /list/:id/edit - :id is number
    body:{
      title: "edit tittle",
      description: "edit description"
    }
  delete:
    method: DELETE
    path: /list/:id - :id is number
```

##### ping-pong routes

```
  ping:
    method: GET
    path: /ping
```
