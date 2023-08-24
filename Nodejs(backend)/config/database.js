// config/database.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('linkedin', 'root', 'Arsd', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
