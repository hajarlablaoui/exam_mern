var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var cors = require("cors")

app.use(logger('dev'));
app.use(express.json({ type: 'application/json', }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);




var mongoose = require('mongoose');
const hajar_lablaoui ="test"
const db = mongoose.connect(`mongodb://localhost:27017/${hajar_lablaoui}`, 
{ useNewUrlParser: true, useUnifiedTopology: true });
db.then(() => {
    console.log("db connected ...")
}).catch(err => {
    console.error("connection failed ... : ", err)
})

module.exports = app;
