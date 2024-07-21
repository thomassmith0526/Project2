const Client = require('./Client');
const Employee = require('./Employee');
const Job = require('./Job');
const Task = require('./task');

// need to link tables together to the jobs table,
// one to one
// many to one connections and stuffs
// and then write seeds for jobs seeds
Job.hasOne(Client, {
    foreignKey: 'id'
})
Client.belongsTo(Job, {
    foreignKey: 'id'
})

module.exports = {
    Client,
    Employee, 
    // Uncomment when jobs get done
    Job, 
    Task}