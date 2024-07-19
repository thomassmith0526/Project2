const express = require('express');
const { sequelize, Clients } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('microphone check');
}) 
