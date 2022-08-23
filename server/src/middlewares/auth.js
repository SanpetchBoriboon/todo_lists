const jwt = require('jsonwebtoken')
const httpStatus = require('http-status')
const { token_key } = require('../../environment-configs')
const responseStatusMessage = require('../utils/response-status-message')

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token']

  if (!token) {
    const error = responseStatusMessage(403)
    return next(error)
  }

  try {
    const decode = jwt.verify(token, token_key)
    req.user = decode
  } catch (error) {
    error = responseStatusMessage(401)
    return next(error)
  }
  return next()
}

module.exports = verifyToken
