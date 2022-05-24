const  Router = require('express')
const router = new Router()
const heroesController = require('../controllers/heroesController')
router.post('/', heroesController.create)
router.get('/', heroesController.getAll)
router.get('/:id', heroesController.getOne)

module.exports = router