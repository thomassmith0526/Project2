const seedClient = require('./client-seeds');
const seedEmployee = require('./employee-seeds');
const seedTask = require('./task-seeds');
const seedJob = require('./job-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedClient();
  console.log('\n----- Client SEEDED -----\n');

  await seedEmployee();
  console.log('\n----- Employee SEEDED -----\n');

  await seedTask();
  console.log('\n----- Task SEEDED -----\n');

  // await seedJob();
  // console.log('\n----- Job Task SEEDED -----\n');

  process.exit(0);
};

seedAll();