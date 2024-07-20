const { Employee } = require('../models');

const employeeData = [
  {
    first_name: 'Hannah',
    last_name: 'Finch'
  },
  {
    first_name: 'Tiff',
    last_name: 'Ticker'
  },
  {
    first_name: 'Jakobe',
    last_name: 'Hammer'
  },
  {
    first_name: 'Lawerance',
    last_name: 'Cuts'
  }
];

const employeeClients = () => Category.bulkCreate(employeeData);

module.exports = employeeClients;