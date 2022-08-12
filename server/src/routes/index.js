const express = require('express')
const rootRouter = express.Router()

rootRouter.use('/ping', require('./ping-pong'))
rootRouter.use('/', require('./todo-lists'))

module.exports = rootRouter
