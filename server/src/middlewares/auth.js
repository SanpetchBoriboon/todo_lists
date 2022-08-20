const jwt = require('jsonwebtoken')
const { token_key } = require('../../environment-configs')

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token']
  let statusCode

  if (!token) {
    statusCode = 403
  }

  try {
    const decode = jwt.verify(token, token_key)
    req.user = decode
  } catch (error) {
    error.status = statusCode || 401
    next(error)
  }
  return next()
}

module.exports = verifyToken
