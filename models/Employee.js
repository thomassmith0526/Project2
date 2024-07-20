const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Employee extends Model {}

Employee.init({
    employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
         },
    first_name: {
    type: DataTypes.STRING(40),
    allowNull: false
    },
    last_name: {
    type:DataTypes.STRING(150),
    allowNull: false
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
})

module.exports = Employee