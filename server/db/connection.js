const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize('progresswatch', 'shahrodkhalkhali', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
