const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Jobs extends Model {}

module.exports = Jobs