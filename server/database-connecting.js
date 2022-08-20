const knexfile = require('./knexfile')
const logger = require('./src/logs/log-configs').getLogger()

try {
  const knex = require('knex')(knexfile)
  module.exports = knex
} catch (error) {
  logger.info('Error connenting database')
  logger.error(error)
  process.exit(1)
}
