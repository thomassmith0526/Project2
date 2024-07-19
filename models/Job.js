const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Job extends Model {}

Job.init({
    job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true 
    },
    client_id: {
        type: DataTypes.INTEGER
    },
    employee_id: {
        type: DataTypes.INTEGER
    },
    job_date: {
        type: DataTypes.STRING(40)
    },
    comments: {
        type: DataTypes.STRING(200)
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job',
})

module.exports = Job