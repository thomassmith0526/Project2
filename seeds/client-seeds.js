const { Category } = require('../models');

const categoryData = [
  {
    first_name: 'Micah',
    last_name: 'Cox',
    location: '123 Fake Address Ave'
  },
  {
    first_name: 'Caleb',
    last_name: 'Smith',
    location: '123 Plushy Bottom way'
  },
  {
    first_name: 'Jacob',
    last_name: 'Towel',
    location: '123 Ian Cognito Path'
  },
  {
    first_name: 'David',
    last_name: 'Plushy',
    location: '1234 Fake Address Ave'
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;