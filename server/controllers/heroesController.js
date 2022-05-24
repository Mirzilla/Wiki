const uuid = require('uuid')
const path = require('path')
const {Heroes} = require('../models/models')
const ApiError = require('../error/ApiError')

class heroesController {
    async create(req, res, next) {
        try {
            const {name, rarityId, typeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const heroes = await Heroes.create({name, rarityId, typeId, img: fileName})
            return res.json(heroes)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new heroesController()