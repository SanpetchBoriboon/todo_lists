const router = require('express').Router()

const controller = require('../controllers/ping-pong')

router.get('/', controller.pong)

module.exports = router
