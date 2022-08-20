const router = require('express').Router()

var controller = require('../controllers/users')

router.get('/', controller.getUsers)
router.post('/register', controller.register)
router.post('/login', controller.login)
router.patch('/:id/edit', controller.edit)
router.delete('/:id', controller.delete)

module.exports = router
