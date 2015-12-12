// DEPENDENCIES
var express = require('express'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    mongoose = require('mongoose'),
    hash = require('bcrypt-nodejs'),
    path = require('path'),
    passport = require('passport'),
    localStrategy = require('passport-local' ).Strategy;

// EXPRESS
var app = express();

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../client')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'sim sim salabim',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// PASSPORT
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MONGO
mongoose.connect('mongodb://localhost/jmny_app')

// MODELS
var User = require('./models/user.js');
// var Goal = require('./models/goal.js')

// ROUTES
var routes = require('./routes/api.js');
app.use('/user/', routes);

app.get('/', function(req, res){
  res.sendFile(path.join(_dirname, '../client', 'index.html'));
});

// ERROR HANDLER
app.user(function(req, res){
  var err = new Error('Oops...Not Found...Try Again');
  err.status = 404;
  next(err);
});

app.user(function(err, req, res){
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

module.exports = app;


// TEMP STUFF ///////////////////////////////////////////

