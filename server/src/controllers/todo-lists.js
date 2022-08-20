const stausCode = require('http-status')
const databaseConnect = require('../../database-connecting')
const tableName = 'todo_table'

module.exports = {
  getAll: async (req, res, next) => {
    const { user_id } = req.user
    try {
      const response = await databaseConnect(tableName).where('user_id', user_id)
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
    const { title, description } = req.body
    const { user_id } = req.user
    console.log(req.user.user_id)
    try {
      const response = await databaseConnect(tableName).insert({
        title: title,
        description: description,
        user_id: user_id,
      })
      res.status(stausCode.CREATED).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  edit: async (req, res, next) => {
    const { id } = req.params
    const { title, description } = req.body
    const { user_id } = req.user
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
