const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Client extends Model {}

module.exports = Client