const rootRouter = require('express').Router()

rootRouter.use('/ping', require('./ping-pong'))
rootRouter.use('/list', require('./todo-lists'))

module.exports = rootRouter
