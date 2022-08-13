const tableName = 'ping_pong_table'

exports.seed = function (knex) {
  return knex(tableName)
    .del()
    .then(function () {
      return knex(tableName).insert([{ message: 'pong' }])
    })
}
