const { database_url } = require('./environment-configs')

module.exports = {
  client: 'pg',
  connection: database_url,
  searchPath: ['knex', 'public'],
}
