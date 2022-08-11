exports.up = function (knex, Promise) {
  return knex.schema.createTable("todolists", function (table) {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.text("description", text);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("todolists");
};

exports.config = { transaction: false };
