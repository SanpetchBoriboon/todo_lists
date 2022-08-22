const httpStatus = require('http-status')
const databaseConnect = require('../../database-connecting')
const tableName = 'todo_table'

module.exports = {
  getAll: async (req, res, next) => {
    const { user_id, user_role } = req.user
    try {
      if (user_role === 'admin') {
        const response = await databaseConnect(tableName).select()
        return res.status(httpStatus.OK).send({ results: response })
      }
      const response = await databaseConnect(tableName).where('user_id', user_id).orderBy('id', 'asc')
      return res.status(httpStatus.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  getById: async (req, res, next) => {
    const { id } = req.params
    const { user_id } = req.user
    try {
      const response = await databaseConnect(tableName).where('id', id).andWhere('user_id', user_id)
      return res.status(httpStatus.OK).send({ results: response })
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
      if (response) {
        return res.status(httpStatus.CREATED).send({ results: { message: httpStatus['201_MESSAGE'] } })
      }
    } catch (error) {
      error.message = httpStatus['400_MESSAGE']
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
      return res.status(httpStatus.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params
    try {
      const response = await databaseConnect(tableName).where('id', id).delete()
      return res.status(httpStatus.OK).send({ message: 'Deleted', response })
    } catch (error) {
      next(error)
    }
  },
}
