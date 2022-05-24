const  Router = require('express')
const router = new Router()
const heroesRouter = require('./heroesRouter')
const rarityRouter = require('./rarityRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/heroes',heroesRouter)
router.use('/rarity', rarityRouter)

module.exports = router