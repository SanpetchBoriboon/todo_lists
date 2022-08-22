const jwt = require('jsonwebtoken')
const httpStatus = require('http-status')
const { token_key } = require('../../environment-configs')

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token']
  let status
  let statusMessage
  let statusName

  if (!token) {
    status = httpStatus.FORBIDDEN
    statusMessage = httpStatus['403_MESSAGE']
    statusName = httpStatus['403_NAME']
  }

  try {
    const decode = jwt.verify(token, token_key)
    req.user = decode
  } catch (error) {
    error.status = status || httpStatus.UNAUTHORIZED
    error.message = statusMessage || httpStatus['401_MESSAGE']
    error.statusName = statusName || httpStatus['401_NAME']
    next(error)
  }
  return next()
}

module.exports = verifyToken
