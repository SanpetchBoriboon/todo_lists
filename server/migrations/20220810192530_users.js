const tableName = 'users_table'

exports.up = function (knex, Promise) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments('id').primary().unique().index()
    table.string('username', 50).notNull().unique()
    table.string('password', 255).notNull()
    table.string('name', 255).notNull()
    table.string('role', 50).notNull()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists(tableName)
}
