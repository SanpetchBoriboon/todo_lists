const tableName = 'ping_pong_table'

exports.up = async function (knex) {
  const exists = await knex.schema.hasTable(tableName)
  if (!exists) {
    await knex.schema
      .createTable(tableName, function (table) {
        table.string('message')
      })
      .then(function () {
        return knex(tableName).insert({ message: 'pong' })
      })
  }
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists(tableName)
}
