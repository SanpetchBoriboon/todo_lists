const stausCode = require('http-status')
const db = require('../../database-connecting')

const tableNamne = 'ping_pong_table'

module.exports = {
  pong: async (req, res, next) => {
    try {
      const message = await db(tableNamne).select()
      if (!message.length) {
        res.status(stausCode.NOT_FOUND).send({ message: 'NOT FOUND' })
      }
      res.status(stausCode.OK).send(message)
    } catch (error) {
      next(error)
    }
  },
}
