const {Sequlize, DataTypes} = require('sequelize');
const sequelize = new Sequlize('greenacres_db', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'mysql'
});

// clients model
const Clients = sequelize.define('clients', {
    client_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }, 
    first_name: {
        type: DataTypes.STRING(40)
    }, 
last_name: {
    type: DataTypes.STRING(150)
}
});

// employees model here
const Employees = sequelize.define('employees', {
    employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
         },
         first_name: {
            type: DataTypes.STRING(40)
         },
         last_name: {
            type:DataTypes.STRING(150)
         }

});

//tasks model here
const Tasks = sequelize.define('tasks', {
    task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      task_name: {
        type: DataTypes.STRING(100)
      },
      task_description: {
        type: DataTypes.STRING(250)
      }
    });

//jobs model here
const Jobs = sequelize.define('jobs', {
    job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true 
    },
    client_id: {
        type: DataTypes.INTEGER
    },
    employee_id: {
        type: DataTypes.INTEGER
    },
    job_date: {
        type: DataTypes.STRING(40)
    },
    comments: {
        type: DataTypes.STRING(200)
    }
});

Jobs.belongsTo(Clients, { foreignKey: 'client_id' });
Jobs.belongsTo(Employees, { foreignKey: 'employee_id' });

sequelize.sync()
  .then(() => {
    console.log('Models synced successfully with the database');
  })
  .catch(err => {
    console.error('Error syncing the models:', err);
  });