const { DATABASE_URL } = require('./config')

module.exports = {
  client: 'pg',
  connection: DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1/postgres',
  searchPath: ['knex', 'public'],
}
