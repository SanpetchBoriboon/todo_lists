const tableName = 'ping_pong_table'

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.string('message')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists(tableName)
}
