var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var passport = require('passport')


require('dotenv').config()
require('./config/database')
require('./config/passport')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const itemRouter = require('./routes/items')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});


app.get('/', (req, res) => {
  // Check if the user is authenticated and store this information
  const isAuthenticated = req.isAuthenticated(); // Assuming you have set up Passport.js for authentication

  // Pass the user's authentication status and any other necessary data to the template
  res.render('index.ejs', { isAuthenticated });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemRouter)

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
