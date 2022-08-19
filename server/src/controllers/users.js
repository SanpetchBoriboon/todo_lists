const stausCode = require('http-status')
const databaseConnect = require('../../database-connecting')
const tableName = 'users'

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const response = await databaseConnect(tableName).select()
      res.status(stausCode.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  getById: async (req, res, next) => {
    const { id } = req.params
    try {
      const response = await databaseConnect(tableName).where('id', id)
      res.status(stausCode.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  add: async (req, res, next) => {
    const { username, password, name } = req.body
    const insertBody = { username, password, name }
    try {
      const response = await databaseConnect(tableName).insert(insertBody)
      res.status(stausCode.CREATED).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  edit: async (req, res, next) => {
    const { id } = req.params
    const { title, description } = req.body
    try {
      const response = await databaseConnect(tableName)
        .where('id', id)
        .update({ title: title, description: description })
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
