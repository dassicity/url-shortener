const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class url extends Model { }

url.init(
    {
        longUrl: {
            type: DataTypes.STRING,
            allowNull: false

        },
        shortUrl: {
            type: DataTypes.STRING,
            allowNull: false

        }
    },
    {
        sequelize, modelName: "url"
    }
)

module.exports = url;