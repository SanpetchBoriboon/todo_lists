exports.up = function (knex) {
  return knex.schema.createTableIfNotExists(
    "ping_pong_table",
    function (table) {
      table.increments("id").primary().unique().index();
    }
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ping_pong_table");
};
