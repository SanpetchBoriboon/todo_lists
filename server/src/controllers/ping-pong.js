const db = require('../../database-connecting')
const logConfig = require('../logs/config')
const logger = logConfig.getLogger()

const tableNamne = 'ping_pong_table'

async function pong(req, res) {
  try {
    const message = await db(tableNamne).select()
    res.status(200).send(message)
  } catch (error) {
    logger.error(error)
    throw error
  }
}

module.exports = { pong }
