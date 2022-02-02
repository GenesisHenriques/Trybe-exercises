const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'Genesis', 'Genesis022305@', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
})

module.exports = sequelize;