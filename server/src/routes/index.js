const rootRouter = require('express').Router()

rootRouter.use('/ping', require('./ping-pong'))
rootRouter.use('/list', require('./todo-lists'))
rootRouter.use('/user', require('./users'))

module.exports = rootRouter
