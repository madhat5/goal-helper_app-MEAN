// PORT & LISTENER
// #!/usr/bin/env node

var debug = require('debug')('passport-mongo'),
    app = require('./app');

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
  debug('Silence please...' + 'Curtains up...' + '\n' + 'Server started on: ' + port)
});



// TEMP STUFF ///////////////////////////////////////////

// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('Silence please...');
// setTimeout(function(){console.log('Curtains up...' + '\n' + 'Server started on: ' + port)}, 1050);

