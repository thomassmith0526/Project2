const sequelize = require('../config/connection');
const { Job, Employee } = require('../models');

const jobData =[
    {
        client_id: '1',
        employee_id: '2',
        task_id: ['3'],
        date: '8/2/24',
        comments: 'Gate code is 7373',
        isDone: false
    },
    {
        client_id: '3',
        employee_id: '2',
        task_id: ['1','3'], 
        date:'7/26/24',
        comments:'They like strips cut in there grass',
        isDone: false
    },
    {
        client_id: '2',
        employee_id: '1',
        task_id: ['3'],
        date:'8/26/24',
        comments:'',
        isDone: true
    },
    {
        client_id: '2',
        employee_id: '1',
        task_id: ['2'],
        date:'8/23/24',
        comments:'',
        isDone: false
    }
];

const jobsDone = () => Job.bulkCreate(jobData);

module.exports = jobsDone;
