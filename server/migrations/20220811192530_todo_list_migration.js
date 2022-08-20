const tableName = 'todo_table'

exports.up = function (knex, Promise) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments('id').primary().unique().index()
    table.string('title').notNull()
    table.text('description').nullable()
    table.string('create_by').notNull()
    table.integer('user_id').notNullable().references('id').inTable('users_table').onDelete('CASCADE')
  })
}

exports.down = async function (knex, Promise) {
  return knex.schema.dropTableIfExists(tableName)
}
