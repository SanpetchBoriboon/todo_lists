const router = require('express').Router()

var controller = require('../controllers/todo-lists')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.add)
router.patch('/:id/edit', controller.edit)
router.delete('/:id', controller.delete)

module.exports = router
