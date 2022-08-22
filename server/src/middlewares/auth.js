const jwt = require('jsonwebtoken')
const httpStatus = require('http-status')
const { token_key } = require('../../environment-configs')
const errorMessage = require('../utils/errorMessage')

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token']

  if (!token) {
    const error = errorMessage(403)
    return next(error)
  }

  try {
    const decode = jwt.verify(token, token_key)
    req.user = decode
  } catch (error) {
    error = errorMessage(401)
    return next(error)
  }
  return next()
}

module.exports = verifyToken
