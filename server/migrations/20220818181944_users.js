const tableName = 'users'

exports.up = function (knex, Promise) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments('id').primary().unique().index()
    table.string('username', 50).notNull().unique()
    table.string('passsword', 50).notNull()
    table.string('name', 255).notNull()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists(tableName)
}
