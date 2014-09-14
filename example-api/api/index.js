var express = require('express');
var mongoose = require('mongoose')


// Require Supporting Middleware //
var middleware = glob.sync('./middleware/**/*.js', {cwd: __dirname}).map(require)
middleware.forEach(function(middleware){
  middleware(api)
});


// Set a DB Connection
var mongoose = require('mongoose');
mongoose.connect('localhost/exampleDB');

require('./router')(api)
