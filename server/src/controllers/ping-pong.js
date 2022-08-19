const stausCode = require('http-status')
const databaseConnect = require('../../database-connecting')

const tableNamne = 'ping_pong_table'

module.exports = {
  pong: async (req, res, next) => {
    try {
      const response = await databaseConnect(tableNamne).select()
      res.status(stausCode.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },
}
