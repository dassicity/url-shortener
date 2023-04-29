const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class url extends Model { }

url.init(
    {
        longUrl: DataTypes.STRING,
        allowNull: false
    },
    {
        shortUrl: DataTypes.STRING,
        allowNull: false
    },
    {
        sequelize, modelName: 'url-db'
    }
)

module.exports = url;