const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Client extends Model {}

Client.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }, 
    first_name: {
        type: DataTypes.STRING(40)
    }, 
    last_name: {
    type: DataTypes.STRING(150)
}
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'client',
})

module.exports = Client