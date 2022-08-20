const stausCode = require('http-status')
const databaseConnect = require('../../database-connecting')
const tableName = 'todo_table'

module.exports = {
  getAll: async (req, res, next) => {
    const { user_id, user_role } = req.user
    try {
      if (user_role === 'admin') {
        const response = await databaseConnect(tableName).select()
        res.status(stausCode.OK).send({ results: response })
      }
      const response = await databaseConnect(tableName).where('user_id', user_id).orderBy('id', 'asc')
      res.status(stausCode.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  getById: async (req, res, next) => {
    const { id } = req.params
    const { user_id } = req.user
    try {
      const response = await databaseConnect(tableName).where('id', id).andWhere('user_id', user_id)
      res.status(stausCode.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  add: async (req, res, next) => {
    const { title, description } = req.body
    const { user_id, name } = req.user
    try {
      const response = await databaseConnect(tableName).insert({
        title: title,
        description: description,
        user_id: user_id,
        create_by: name,
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
        .andWhere('user_id', user_id)
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
