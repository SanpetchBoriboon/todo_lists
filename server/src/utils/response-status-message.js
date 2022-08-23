const httpStatus = require('http-status')

function responseStatusMessage(statusCode) {
  const statusName = httpStatus[`${statusCode}_NAME`]
  const message = httpStatus[`${statusCode}_MESSAGE`]
  return {
    code: statusCode,
    statusName: statusName,
    message: message,
  }
}

module.exports = responseStatusMessage
