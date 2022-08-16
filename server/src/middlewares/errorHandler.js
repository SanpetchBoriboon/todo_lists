const statusCode = require('http-status')
const logConfig = require('../logs/log-configs')
const logger = logConfig.getLogger()

module.exports = {
  // Error handling Middleware function for logging the error message
  errorLogger: (error, req, res, next) => {
    logger.error(`Error: ${error.message}`)
    next(error) // calling next middleware
  },

  errorResponder: (error, req, res, next) => {
    res.header('Content-Type', 'application/json')
    const status = error.status || statusCode.BAD_REQUEST
    res.status(status).send({
      error: {
        code: status,
        message: error.message,
      },
    })
  },

  invalidPathHandler: (req, res, next) => {
    res.status(statusCode.NOT_FOUND).send({
      error: {
        code: statusCode.NOT_FOUND,
        message: 'NOT FOUND',
      },
    })
  },
}
