require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./routes/config/db');

const app = express();
const PORT = 5000 

//connect to DB

connectDB();

app.use(express.static('public'));

//templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');



app.use('/', require('./routes/main'));

app.listen(PORT, () => {
    console.log('App listening on port 5000');
});

