var User = require('./../../models/user');
var JWTService = require('./../../services/jwt');

module.exports = function(req, res, next) {
  var user = {email: req.body.user.email }
  var password = req.body.user.password;

  return User.register(user, password, function(err, user){
    if (err) {
      res.status(404).json({
        error: err
      })
    } else {
      delete user.hash; delete user.salt;
      var token = new JWTService.encode(user._id);
      return res.status(201).json({
        user: user,
        token: token
      })
    }
  });

};
