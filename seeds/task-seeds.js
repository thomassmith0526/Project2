const { Task } = require('../models');

const taskData = [
  {
    name: 'Tree Trimming',
    description: 'Tree Trimming STUFFFS'
  },
  {
    name: 'Edging',
    description: 'Edging STUFFFFS '
  },
  {
    name: 'Mowing',
    description: 'Mowing STUFFFFS'
  },
];

const taskClients = () => Task.bulkCreate(taskData);

module.exports = taskClients;