const express = require('express');
const routes = require('./controllers')
const app = express();
const PORT = process.env.PORT || 3001;
// const sequelize = require('./config/connection')


app.use(routes);

app.listen(PORT, () => {
    console.log('microphone check');
}) 
