const router = require('express').Router()

var controller = require('../controllers/todo-lists')

router.get('/', controller.getAll)

module.exports = router
