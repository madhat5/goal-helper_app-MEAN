var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    User = require('../models/user.js');

// REGISTER
router.post('/register', function(req, res){
  User.register(new User({ username: req.body.username}), req.body.password, function(err, account){
    if (err){
      return res.status(500).json({err: err});
    }
    passport.authenticate('local')(req, res, function(){
      return res.status(200).json({status: 'You were registered!'});
    });
  });
});

// LOGIN
router.post('/login', function(req, res, next){
  passport.authenticate('local', function(err, user, info){
    if (err) {
      return res.status(500).json({err: err});
    } else if (!user) {
      return res.status(401).json({err: info});
    }
    req.logIn(user, function(err){
      if (err){
        return res.status(500).json({err: 'Could not log you in...Try again'});
      }
      res.status(200).json({status: 'You were logged in!'});
    });
  }) (req, res, next);
});

// LOGOUT
router.get('/logout', function(req, res){
  req.logout();
  res.status(200).json({status: 'See you nex time!'});
});

module.exports = router;

// TEMP STUFF ///////////////////////////////////////////







