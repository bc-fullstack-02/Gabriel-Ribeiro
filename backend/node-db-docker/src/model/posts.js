const {  DataTypes, Model } = require('sequelize');
const pg = require('./pg')


const Post = pg.define('post', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    body: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });

  module.exports = Post;