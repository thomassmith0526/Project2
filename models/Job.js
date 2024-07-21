const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Job extends Model {}

Job.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'client',
            keys: 'id'
          }
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'employee',
        //     key: 'id'
        //   }
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'task',
        //     key: 'id'
        //   }
    },
    date: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING(200),
        allowNull: false,
        // references: {
        //     model: 'client',
        //     key: 'location'
        // }
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