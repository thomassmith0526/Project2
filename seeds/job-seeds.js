const sequelize = require('../config/connection');
const { Job, Employee } = require('../models');

const jobData =[
    {
        clint_id: '',
        employee_id: '',
        task_id: '',
        date: '6/2/24',
        location: '1 Lone Grass Dr Jacksonville, FL 32034',
        comments: 'Green Acres has very professional employees and very quick getting the job done.'
    },
    {
        clint_id: '',
        employee_id: '',
        task_id: '',
        date:'9/26/23',
        location:'145 Duavl lane Jacksonville, FL 32034',
        comments:'They were able to get the trees cut down off the roof and satellite dish just in time for the Jags game'
    },
    {
        clint_id: '',
        employee_id: '',
        task_id: '',
        date:'5/26/24',
        location:'857 Jackson hole Dr Orange Park, FL 32065',
        comments:'Will NEVER call anyone else to get my lawn looking like new'
    },
    {
        clint_id: '',
        employee_id: '',
        task_id: '',
        date:'6/23/24',
        location:'5896 Main Street Atlantic Beach, FL 32233',
        comments:'Green Acres was able to take my small yard and make it look like it was out of a Magazine'
    }
];

const jobsDone = () => Category.bulkCreate(jobData);

module.exports = jobsDone;