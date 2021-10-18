const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('challengeapi', 'root', 'developer', {
    host: 'localhost',
    dialect: 'mysql' 
  });

module.exports = sequelize;