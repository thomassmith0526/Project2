const { Task } = require('../models');

const taskData = [
  {
    name: 'Tree Trimming',
    description: 'Tree Trimming STUFFFS',
    price: 300.00
  },
  {
    name: 'Edging',
    description: 'Edging STUFFFFS',
    price: 25.00
  },
  {
    name: 'Mowing',
    description: 'Mowing STUFFFFS',
    price: 50.00
  },
  {
    name: 'Planting flowers',
    description: 'planting flowers around the house and yard',
    price: 200.00
  },
  {
    name: 'Watering',
    description: 'watering grass, trees, flowers',
    price: 50.00
  },
];

const taskClients = () => Task.bulkCreate(taskData);

module.exports = taskClients;