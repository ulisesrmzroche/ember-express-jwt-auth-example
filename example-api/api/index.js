var express = require('express');

module.exports = api = express();

require('./router')(api)
