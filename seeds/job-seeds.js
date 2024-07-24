const sequelize = require('../config/connection');
const { Job, Employee } = require('../models');

const jobData =[
    {
        client_id: '1',
        employee_id: 2,
        employee_id: 3,
        task_id: '3',
        date: '6/2/24',
        comments: 'Gate code is 7373',
        isDone: false
    },
    {
        client_id: '3',
        employee_id: '2', 
        task_id: '1',
        date:'9/26/23',
        comments:'They like strips cut in there grass',
        isDone: false
    },
    {
        client_id: '2',
        employee_id: '1',
        task_id: '3',
        date:'5/26/24',
        comments:'',
        isDone: true
    },
    {
        client_id: '2',
        employee_id: '1',
        task_id: '2',
        date:'6/23/24',
        comments:'',
        isDone: false
    }
];

const jobsDone = () => Job.bulkCreate(jobData);

module.exports = jobsDone;
