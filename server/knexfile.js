module.exports = {
  client: "pg",
  connection: "postgresql://postgres:postgres@127.0.0.1/postgres",
  searchPath: ["knex", "public"],
};
