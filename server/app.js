var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
var logger = require('morgan');
var config = require('./config');
var passport = require('passport');
//var cookieParser = require('cookie-parser');
//var session = require('express-session');
//var FileStore = require('session-file-store')(session);

const Contact = require('./models/contact');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contacts');
var deviRouter = require('./routes/devis');
var serviceRouter = require('./routes/services');
const mongoose = require('mongoose');
const url = config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db)=>{
  console.log('Connected correctly to server');
  },(err)=>{
  console.log(err);
});

var app = express();



//app.use(cors()) 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
/*
app.use(cors({origin: [
  "http://localhost:4200"
], credentials: true}));
*/
//app.use(cookieParser());
/*
app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));
*/
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
/*
function auth(req,res,next){
  console.log(req.session);
  if(!req.session.use){
    var err = new Error("Your are not authenticated");
    res.setHeader('WWW-Authenticate','Basic');
    err.status=401;
    return next(err);
  }
  else {
    if(req.session.user === 'authenticated'){
        next();
  }
    else{
        var err = new Error('You are not authenticated');
        err.status=403;
        return next(err);
  }
  }
}
app.use(auth);
*/
app.use(express.static(path.join(__dirname, 'public')));
/*
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});
*/
app.use('',serviceRouter);
app.use('',contactRouter);
app.use('',deviRouter);



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
