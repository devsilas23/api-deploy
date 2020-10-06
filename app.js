var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();
mongoose.connect('mongodb+srv://silas:BHdVFANLTBmFVHdv@onthereins.1pvqv.mongodb.net/ccbconfirme?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});




app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || '3000')


