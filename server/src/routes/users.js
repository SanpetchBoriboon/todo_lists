const router = require('express').Router()

var controller = require('../controllers/users')
const auth = require('../middlewares/auth')

router.get('/', auth, controller.getUsers)
router.post('/register', controller.register)
router.post('/login', controller.login)
router.patch('/edit', auth, controller.edit)
router.delete('/:id/delete', auth, controller.delete)

module.exports = router
