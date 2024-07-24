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
            key: 'id'
          }
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'employee',
            key: 'employee_id'
          }
    },
    // task_id: [{
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'task',
    //         key: 'id'
    //       }
    // }],
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    comments: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },

    isDone: {
        type: DataTypes.BOOLEAN,
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job',
})

module.exports = Job