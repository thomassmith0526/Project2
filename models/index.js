const { Model } = require('sequelize');
const Client = require('./Client');
const Employee = require('./Employee');
const Job = require('./Job');
const Task = require('./task');


Job.belongsTo(Client, {foreignKey: 'client_id'})
Client.hasOne(Job, {foreignKey: 'client_id'})

Job.belongsTo(Employee,{foreignKey: 'employee_id'})
Employee.hasOne(Job, {foreignKey: 'employee_id'})

Job.belongsTo(Task,{foreignKey: 'task_id'})
Task.hasOne(Job, {foreignKey: 'task_id'})

module.exports = {
    Client,
    Employee, 
    Job, 
    Task}