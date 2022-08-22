const httpStatus = require('http-status')
const logConfig = require('../logs/log-configs')
const logger = logConfig.getLogger()

module.exports = {
  errorLogger: (error, req, res, next) => {
    logger.error(`Error: ${error.message}`)
    next(error)
  },

  errorResponder: (error, req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    const status = error.status || httpStatus.BAD_REQUEST
    res.status(status).send({
      error: {
        code: status,
        statusName: error.statusName || httpStatus['400_NAME'],
        message: error.message || httpStatus['400_MESSAGE'],
      },
    })
  },

  invalidPathHandler: (req, res, next) => {
    res.status(httpStatus.NOT_FOUND).send({
      error: {
        code: httpStatus.NOT_FOUND,
        statusName: httpStatus['404_NAME'],
        message: httpStatus['404_MESSAGE'],
      },
    })
  },
}
