const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Task extends Model {}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
    description: {
        type: DataTypes.STRING(250),
      },
    price: {
      type: DataTypes.DECIMAL
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Task',
})

module.exports = Task