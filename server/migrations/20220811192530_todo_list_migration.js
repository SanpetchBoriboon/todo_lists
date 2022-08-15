const tableName = 'todo_table'

exports.up = function (knex, Promise) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments('id').primary().unique().index()
    table.string('title').notNull()
    table.text('description').nullable()
  })
}

exports.down = async function (knex, Promise) {
  await knex.schema.dropTableIfExists(tableName)
}
