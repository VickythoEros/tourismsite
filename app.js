var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index-router');
var activityRouter = require('./routes/activity-router');
var contactRouter = require('./routes/contact-router');
var galleryRouter = require('./routes/gallery-router');
var signInRouter = require('./routes/sign-in-router');
var signUpRouter = require('./routes/sign-up-router');
var whoUsRouter = require('./routes/who-us-router');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/activity', activityRouter)
app.use('/contact', contactRouter)
app.use('/gallery', galleryRouter)
app.use('/', indexRouter)
app.use('/signin', signInRouter)
app.use('/signup', signUpRouter)
app.use('/whous', whoUsRouter)


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
