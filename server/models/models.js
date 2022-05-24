const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "User"},
})

const Heroes = sequelize.define('heroes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false},
    rating:{type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false}
})

const Rarity = sequelize.define('rarity', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false},
})
const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})
const HeroesInfo = sequelize.define('heroes_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    desc: {type: DataTypes.STRING, allowNull: false}
})

User.hasMany(Rating)
Rating.belongsTo(User)

Type.hasMany(Heroes)
Heroes.belongsTo(Type)

Rarity.hasMany(Heroes)
Heroes.belongsTo(Rarity)

Heroes.hasMany(Rating)
Rating.belongsTo(Heroes)

Heroes.hasMany(HeroesInfo)
HeroesInfo.belongsTo(Heroes)

module.exports = {
    User,
    Heroes,
    Type,
    Rarity,
    Rating,
    HeroesInfo
}