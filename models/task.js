const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Task extends Model {}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING(100)
      },
    description: {
        type: DataTypes.STRING(250)
      }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'task',
})

module.exports = Task