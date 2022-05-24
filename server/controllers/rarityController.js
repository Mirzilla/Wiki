const {Rarity} = require('../models/models')
const ApiError = require('../error/ApiError')

class rarityController {
    async create(req, res) {
        const {name} = req.body
        const rarity = await Rarity.create({name})
        return res.json(rarity)

    }

    async getAll(req, res) {


    }
}

module.exports = new rarityController()