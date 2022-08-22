const httpStatus = require('http-status')
const logConfig = require('../logs/log-configs')
const logger = logConfig.getLogger()
const errorMessage = require('../utils/errorMessage')

module.exports = {
  errorLogger: (error, req, res, next) => {
    logger.error(error)
    next(error)
  },

  errorResponder: (error, req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    const statusCode = error.code || 400
    error = errorMessage(statusCode)
    return res.status(statusCode).send(error)
  },

  invalidPathHandler: (req, res, next) => {
    const error = errorMessage(404)
    return res.status(error.code).send(error)
  },
}
