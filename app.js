var express = require('express');
var path = require('path');
require('dotenv').config();
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moveRouter = require('./routes/move.routes');
var vehiclesRouter = require('./routes/moving.vehicle');

var port = process.env.APP_PORT;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/move', moveRouter);
app.use('/vehicles', vehiclesRouter);

var server = app.listen(port, () => {
    console.log(`Listening on ${server.address().address}:${server.address().port}`);
});

module.exports = app;
