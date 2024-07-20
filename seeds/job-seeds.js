const { Job } = require('../models');

const jobData = [
];

const jobClients = () => Category.bulkCreate(jobData);

module.exports = jobClients;