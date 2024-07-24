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

Job.hasMany(Employee,{foreignKey: 'employee_id', sourceKey: 'employee_id'})
Employee.belongsTo(Job, {foreignKey: 'employee_id'})
// Job.belongsToMany(Employee,{
//     through: 'Employee_Job',
//     foreignKey: 'job_id'
// })

// Employee.belongsToMany(Job, {
//     through: 'Employee_Job',
//     foreignKey: 'employee_employee_id'
// })

// Task.belongsToMany(Task, {
//     through: Job,
//     as: 'client'
// })



//Job/Task Relations
// Task.hasOne(Job,{
    // foreignKey: 'task_id:'
// })
// Job.belongsTo(Task,{
    // foreignKey: 'task_id:'
// })

module.exports = {
    Client,
    Employee, 
    Job, 
    Task}