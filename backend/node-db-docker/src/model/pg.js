const Sequelize = require('sequelize')


//conectando ao banco de dados
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'localhost',
    port:5000,
    dialect: 'postgres'
  });
module.exports = sequelize;