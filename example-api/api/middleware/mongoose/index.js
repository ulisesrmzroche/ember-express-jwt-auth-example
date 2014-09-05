var mongoose = require('mongoose');

module.exports = function(api) {
  return mongoose.connect('localhost/ember_jwt_auth_example')
};
