const stausCode = require('http-status')
const databaseConnect = require('../../database-connecting')

const tableNamne = 'ping_pong_table'

module.exports = {
  pong: async (req, res, next) => {
    try {
      const response = await databaseConnect(tableNamne).select()
      if (!response.length) {
        res.status(stausCode.NOT_FOUND).send({ message: 'NOT FOUND' })
      }
      res.status(stausCode.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },
}
