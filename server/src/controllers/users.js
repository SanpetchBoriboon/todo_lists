const httpStatus = require('http-status')
const bcrypy = require('bcryptjs')
const jwt = require('jsonwebtoken')

const databaseConnect = require('../../database-connecting')
const { token_key } = require('../../environment-configs')
const tableName = 'users_table'

module.exports = {
  getUsers: async (req, res, next) => {
    const { user_role, user_id } = req.user
    try {
      if (user_role === 'admin') {
        const response = await databaseConnect(tableName).select()
        return res.status(httpStatus.OK).send({ results: response })
      }
      const response = await databaseConnect(tableName).where('id', user_id)
      return res.status(httpStatus.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  login: async (req, res, next) => {
    const { username, password } = req.body
    try {
      const response = await databaseConnect(tableName).where('username', username)
      const vaildatePassword = await bcrypy.compare(password, response[0].password)
      if (response && vaildatePassword) {
        const token = jwt.sign(
          {
            user_id: response[0].id,
            user_role: response[0].role,
            name: response[0].name,
          },
          token_key,
          {
            expiresIn: '2h',
          },
        )
        response[0].token = token
        return res.status(httpStatus.OK).send(response)
      }
    } catch (error) {
      error.message = 'Invaild Credentials'
      next(error)
    }
  },

  register: async (req, res, next) => {
    const { username, password, name, role = 'user' } = req.body
    try {
      encryptedPassword = await bcrypy.hash(password, 10)
      const response = await databaseConnect(tableName).insert({
        username: username.toLowerCase(),
        password: encryptedPassword,
        name: name,
        role: role,
      })
      return res.status(httpStatus.CREATED).send({ results: response })
    } catch (error) {
      error.status = httpStatus.CONFLICT
      error.message = httpStatus['409_MESSAGE']
      next(error)
    }
  },

  edit: async (req, res, next) => {
    const { user_id } = req.user
    const { name, password } = req.body
    try {
      encryptedPassword = await bcrypy.hash(password, 10)
      const response = await databaseConnect(tableName)
        .where('id', user_id)
        .update({ name: name, password: encryptedPassword })
      return res.status(httpStatus.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params
    const { user_role, user_id } = req.user
    try {
      if (user_id != id && user_role === 'admin') {
        const response = await databaseConnect(tableName).where('id', id).delete()
        if (response == 0) {
          return next()
        }
        return res.status(httpStatus.OK).send({ message: 'Deleted' })
      }
      next()
    } catch (error) {
      next(error)
    }
  },
}
