const tableName = 'todo_table'

exports.up = async function (knex) {
  const exists = await knex.schema.hasTable(tableName)
  if (!exists) {
    await knex.schema.createTable(tableName, function (table) {
      table.increments('id').primary().unique().index()
      table.string('title').notNull()
      table.text('decription').nullable()
    })
  }
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists(tableName)
}
