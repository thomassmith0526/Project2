const sequelize = require('../config/connection');
const { Job, Employee } = require('../models');

const jobData =[
    {
        client_id: '1',
        employee_id: 2,
        task_id: '3',
        date: '02-06-2024',
        comments: 'Gate code is 7373',
        isDone: true
    },   
    {
        client_id: '3',
        employee_id: '2', 
        task_id: '1',
        date:'26-09-2024',
        comments:'They like strips cut in there grass',
        isDone: false
    },
    {
        client_id: '2',
        employee_id: '1',
        task_id: '3',
        date:'26-05-2024',
        comments:'',
        isDone: true
    },
    {
        client_id: '2',
        employee_id: '1',
        task_id: '2',
        date:'23-06-2024',
        comments:'',
        isDone: true
    }
];

const jobsDone = () => Job.bulkCreate(jobData);

module.exports = jobsDone;
