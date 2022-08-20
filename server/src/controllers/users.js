const stausCode = require('http-status')
const bcrypy = require('bcryptjs')
const jwt = require('jsonwebtoken')

const databaseConnect = require('../../database-connecting')
const { token_key } = require('../../environment-configs')
const tableName = 'users_table'

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const response = await databaseConnect(tableName).select()
      res.status(stausCode.OK).send({ results: response })
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
          },
          token_key,
          {
            expiresIn: '2h',
          },
        )
        response.push({ token: token })
        res.status(stausCode.OK).send(response)
      }
      res.status(stausCode.BAD_REQUEST).send({ message: 'Invaild Credentials' })
    } catch (error) {
      next(error)
    }
  },

  register: async (req, res, next) => {
    const { username, password, name } = req.body
    try {
      encryptedPassword = await bcrypy.hash(password, 10)
      const response = await databaseConnect(tableName).insert({
        username: username.toLowerCase(),
        password: encryptedPassword,
        name: name,
      })
      res.status(stausCode.CREATED).send({ results: response })
    } catch (error) {
      error.status = 409
      next(error)
    }
  },

  edit: async (req, res, next) => {
    const { id } = req.params
    const { name, password } = req.body

    console.log(id, name, password)
    try {
      encryptedPassword = await bcrypy.hash(password, 10)
      const response = await databaseConnect(tableName)
        .where('id', id)
        .update({ name: name, password: encryptedPassword })
      res.status(stausCode.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params
    try {
      const response = await databaseConnect(tableName).where('id', id).delete()
      res.status(stausCode.OK).send({ message: 'Deleted', response })
    } catch (error) {
      next(error)
    }
  },
}
