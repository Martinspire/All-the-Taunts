// define globals
var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server),
    path = require('path'),
    // favicon = require('static-favicon'),
    // logger = require('morgan'),
    // cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

// set up our JSON API for later
// require('./routes/api')(app);

// set up our socket server
require('./sockets')(io);

// start the server
server.listen(8000, function(){ console.log("Server listening on port 8000");});

app.use(express.static(path.join(__dirname, '../frontend/.tmp')));
app.use(express.static(path.join(__dirname, '../frontend')));

// view engine setup (for later)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware settings
// app.use(favicon());
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// app.use(cookieParser());
// 
//app.use(express.static(path.join(__dirname +  '/frontend')));

// for development purposes, access during
// iterative development as /angular-dev
// see below if you want to add back the development env
// app.use('/frontend', express.static(__dirname  + '/frontend'));

// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

// production error handler
// no stacktraces leaked to user
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

module.exports = app;