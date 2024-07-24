const {Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection.js');

class JobTask extends Model {}

JobTask.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Job',
            key: 'id'
        }
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Task',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'JobTask',
})




module.exports = JobTask