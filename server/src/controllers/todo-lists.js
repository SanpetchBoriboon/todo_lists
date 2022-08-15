const db = require('../../database-connecting')
const logConfig = require('../logs/config')
const logger = logConfig.getLogger()

const tableName = 'todo_table'

module.exports = {
  getAll: async (req, res) => {
    try {
      const response = await db(tableName).select()
      res.status(200).send({ results: response })
    } catch (error) {
      logger.error(error)
      throw error
    }
  },

  getById: async (req, res) => {
    const { id } = req.params
    try {
      const response = await db(tableName).where('id', id)
      res.status(200).send({ results: response })
    } catch (error) {
      logger.error(error)
      throw error
    }
  },

  add: async (req, res) => {
    const { title, description } = req.body
    try {
      const response = await db(tableName).insert({ title: title, description: description })
      res.status(200).send({ results: response })
    } catch (error) {
      logger.error(error)
      throw error
    }
  },

  edit: async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body
    try {
      const response = await db(tableName).where('id', id).update({ title: title, description: description })
      res.status(200).send({ results: response })
    } catch (error) {
      logger.error(error)
      throw error
    }
  },

  delete: async (req, res) => {
    const { id } = req.params
    try {
      await db(tableName).where('id', id).delete()
      res.status(200)
    } catch (error) {
      logger.error(error)
      throw error
    }
  },
}
