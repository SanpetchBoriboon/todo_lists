const router = require('express').Router()

var controller = require('../controllers/ping-pong')

router.get('/', controller.pong)

module.exports = router
