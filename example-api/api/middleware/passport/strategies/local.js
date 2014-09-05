var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy
var User = require('./../../models/user');

module.exports = function(api){

  this.options = {
    usernameField: 'email',
    passwordField: 'password',
  };

  this.authenticate = function(username, password, done) {
    // retrieve user ...

    var promise = User.findOne({email: username}).exec()
    return promise.then(function(user){
      return user.authenticate(password, function(err, user){
        if(err) { done(err) }
        return done(null, user)
      })
    })
  };

  return passport.use(new LocalStrategy(this.options, this.authenticate))

}
