const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
const layout = require('./views/layout.js');
const { db } = require('./models');

app.get('/', (req, res) => {
    res.send(layout('My Wikipedia Article'));
});

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    })

const PORT = 1234;

app.listen(PORT);