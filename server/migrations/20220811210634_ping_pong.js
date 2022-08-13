const tableName = 'ping_pong_table'

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.string('message')
  })
  // .then(function () {
  //   return knex(tableName).insert({ message: 'pong' })
  // })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists(tableName)
}
