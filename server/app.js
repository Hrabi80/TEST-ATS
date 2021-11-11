var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
var logger = require('morgan');
var config = require('./config');
var passport = require('passport');
const Products = require('/models/products');
const fetch   = require('node-fetch');


var indexRouter = require('./routes/index');
var productRouter = require('./routes/products');

const mongoose = require('mongoose');
const url = config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db)=>{
  console.log('Connected correctly to server');
  app.get('/https://tech.dev.ats-digital.com/api/products', function (req, res) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        Products.create(req.body)
    })
    .catch(err => {
        res.send(err);
    });
});
  },(err)=>{
  console.log(err);
});

var app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});
app.use('/', indexRouter);


app.use(express.static(path.join(__dirname, 'public')));


app.use('',productRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
