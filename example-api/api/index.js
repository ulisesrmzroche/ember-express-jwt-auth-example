var express = require('express');
var glob = require('glob');

module.exports = api = express()

// Requires supporting middleware
var middleware = glob.sync('./middleware/**/*.js', { cwd: __dirname }).map(require);
 middleware.forEach(function(middleware){
   middleware(api)
})

// Setup our routes
require("./router")(api);
