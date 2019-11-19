const express = require('express');

const app = express();
var cors = require('cors')

const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv/config');

app.use(bodyparser.json());

app.use(cors());


require('./routes/users.js')(app);

require('./routes/favorites')(app);


app.get('/', (req, res)=> {

    res.send('We are on home')
});

mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true ,useNewUrlParser: true } ,()=> console.log('Connnected to DB'));

app.listen(3000);
