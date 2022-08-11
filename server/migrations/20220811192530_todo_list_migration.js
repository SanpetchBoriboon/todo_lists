exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("todo_table", function (table) {
    table.increments("id").primary().unique().index();
    table.string("title").notNull();
    table.text("decription").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("todo_table");
};
