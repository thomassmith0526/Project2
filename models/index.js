const { Model } = require('sequelize');
const Client = require('./Client');
const Employee = require('./Employee');
const Job = require('./Job');
const Task = require('./task');

// need to link tables together to the jobs table,
// one to one
// many to one connections and stuffs
// and then write seeds for jobs seeds

// Job/Client Relations -- I think this is done

Client.belongsTo(Job, {foreignKey: 'id'})
Job.hasOne(Client, {foreignKey: 'id'})


// Job/Employee relations : NEED TO BE ONE TO MANY HELP

Job.belongsTo(Employee,{foreignKey: 'employee_id'})
Employee.hasOne(Job, {foreignKey: 'employee_id'})

Job.belongsTo(Task,{foreignKey: 'employee_id'})
Task.hasOne(Job, {foreignKey: 'employee_id'})

module.exports = {
    Client,
    Employee, 
    Job, 
    Task}