var passport = require('passport');

module.exports = function(api){
  api.use(passport.initialize())
}
