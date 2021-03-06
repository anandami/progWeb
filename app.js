var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testeRouter = require('./routes/teste');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//criar o caminho para o database.js
let db = require('./config/database')
db('mongodb://localhost:27017/4mat2020')

app.use('/', indexRouter);
app.use('/users', usersRouter);
//chamar a pagina de teste - caminho a partir do app 
app.use('/teste', testeRouter);

module.exports = app;
