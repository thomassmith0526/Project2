const { Model } = require('sequelize');
const Client = require('./Client');
const Employee = require('./Employee');
const Job = require('./Job');
const Task = require('./task');

// need to link tables together to the jobs table,
// one to one
// many to one connections and stuffs
// and then write seeds for jobs seeds

// Job/Client Relations?
Job.hasOne(Client, {
    foreignKey: 'id'
})
Client.belongsTo(Job, {
    foreignKey: 'id'
})

//Job/Employee Relations
Job.hasOne(Employee, {
    foreignKey: 'employee_id'
})
Employee.belongsTo(Job, {
    foreignKey: 'employee_id'
})

//Job/Task Relations
Job.hasOne(Task, {
    foreignKey: 'id'
})
Task.belongsTo(Job, {
    foreignKey: 'id'
})

// Job.hasOne(client)

// Job.hasMany(tasks)

// Job.hasMany(employees)

module.exports = {
    Client,
    Employee, 
    // Uncomment when jobs get done
    Job, 
    Task}