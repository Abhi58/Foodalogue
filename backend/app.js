const express = require('express');

const app = express();

const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv/config');

app.use(bodyparser.json());

require('./routes/favorites.js')(app);

//app.use('/users',usersRoutes )

app.get('/', (req, res)=> {

    res.send('We are on home')
});

mongoose.connect(process.env.DB_CONNECTION, ()=> console.log('Connnected to DB'));

app.listen(3000);
