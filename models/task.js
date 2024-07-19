const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class task extends Model {}

module.exports = task