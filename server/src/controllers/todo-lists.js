const stausCode = require('http-status')
const db = require('../../database-connecting')
const tableName = 'todo_table'

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const response = await db(tableName).select()
      if (!response.length) {
        res.status(stausCode.NOT_FOUND).json({ message: 'Not Found' })
      }
      res.status(stausCode.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  getById: async (req, res, next) => {
    const { id } = req.params
    try {
      const response = await db(tableName).where('id', id)
      if (!response.length) {
        res.status(stausCode.NOT_FOUND).json({ message: 'Not Found' })
      }
      res.status(stausCode.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  add: async (req, res, next) => {
    const { title, description } = req.body
    try {
      const response = await db(tableName).insert({ title: title, description: description })
      res.status(stausCode.CREATED).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  edit: async (req, res, next) => {
    const { id } = req.params
    const { title, description } = req.body
    try {
      const response = await db(tableName).where('id', id).update({ title: title, description: description })
      res.status(stausCode.OK).send({ results: response })
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params
    try {
      const response = await db(tableName).where('id', id).delete()
      res.status(stausCode.OK).send({ message: 'Deleted', response })
    } catch (error) {
      next(error)
    }
  },
}
