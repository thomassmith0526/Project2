const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Job extends Model {}

Job.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true 
    },
    client_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'client',
            keys: 'id'
          }
    },
    employee_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'employee',
            keys: 'id'
          }
    },
    task_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'task',
            keys: 'id'
          }
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