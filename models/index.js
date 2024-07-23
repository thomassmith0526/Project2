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
Job.hasOne(Client, {
    foreignKey: 'id'
})
Client.belongsTo(Job, {
    foreignKey: 'id'
})

//
Job.hasMany(Employee, { 
    foreignKey: 'employee_id'
})

//Job/Task Relations
Job.hasMany(Task, {
    foreignKey: 'id'

})

module.exports = {
    Client,
    Employee, 
    Job, 
    Task}