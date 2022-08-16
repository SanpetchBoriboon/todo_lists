const tableName = 'todo_table'

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([{ title: 'Example title', description: 'Example description' }])
    })
}
