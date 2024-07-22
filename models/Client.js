const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Client extends Model {}

Client.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }, 
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    last_name: {
    type: DataTypes.STRING,
    allowNull: false
    }, 
    location: {
    type: DataTypes.STRING,
    allowNull: false
}
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'client',
})

module.exports = Client