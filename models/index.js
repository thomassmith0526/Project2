const { Model } = require('sequelize');
const Client = require('./Client');
const Employee = require('./Employee');
const Job = require('./Job');
const Task = require('./task');
const JobTask = require('./JobTask')

// need to link tables together to the jobs table,
// one to one
// many to one connections and stuffs
// and then write seeds for jobs seeds

// Job/Client Relations -- I think this is done

Client.hasOne(Job,{
    foreignKey: 'client_id'
})

Job.belongsTo(Client,{
    foreignKey: 'client_id'
})


// Job/Employee relations : NEED TO BE ONE TO MANY HELP
Employee.hasOne(Job,{
    foreignKey: 'employee_id'
})

Job.belongsTo(Employee,{
    foreignKey: 'employee_id'
})

/*
Job.hasMany(Employee, { 
    foreignKey: 'employee_id'
})
*/


//Job/Task Relations

Task.belongsToMany(Job,{ 
    through: 'JobTask',
    foreignKey: 'task_id'
})

Job.belongsToMany(Task,{
    through:'JobTask',
    foreignKey: 'job_id'
})


module.exports = {
    Client,
    Employee, 
    Job, 
    Task,
    JobTask}