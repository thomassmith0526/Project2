const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Employee extends Model {}

module.exports = Employee