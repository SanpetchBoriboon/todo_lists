const router = require('express').Router()

const controller = require('../controllers/todo-lists')
const auth = require('../middlewares/auth')

router.get('/', auth, controller.getAll)
router.get('/:id', auth, controller.getById)
router.post('/', auth, controller.add)
router.patch('/:id/edit', auth, controller.edit)
router.delete('/:id', auth, controller.delete)

module.exports = router
