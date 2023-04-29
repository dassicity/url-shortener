const { Sequelize } = require('sequelize');

const createDb = new Sequelize("url-db", "dassicity", "password", {
    dialect: 'sqlite',
    host: './config/url-db.sqlite'
})

module.exports = createDb;