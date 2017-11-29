const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/dubljan');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

// No 'Access-Control-Allow-Origin'
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

// init routes
app.use('/api', require('./routes/api'));


// main href
app.get('/', function (req, res) {
    res.send('Hello World igor ilikh');
});

// error handling
app.use(function (err, req, res, next) {
    // console.log();
    res.status(422).send({error: err.message});
});

// listen for request
app.listen(process.env.port || 4000, function () {
    console.log('Running on port 4000...');
});