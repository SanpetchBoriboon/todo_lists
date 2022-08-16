const { database_url } = require('./environment-configs')

module.exports = {
  client: 'pg',
  connection: database_url || 'postgresql://postgres:postgres@127.0.0.1/postgres',
  searchPath: ['knex', 'public'],
}
