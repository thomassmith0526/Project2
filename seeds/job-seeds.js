const { Job } = require('../models');

const jobData = [
];

const jobClients = () => Job.bulkCreate(jobData);

module.exports = jobClients;