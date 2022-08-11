const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "todo_schema",
  },
});

module.exports = knex;
