var User = require('./models/user');

module.exports = UsersCreateRoute = function(req, res, next){
  var user = new User({email: req.body.email});
  var password = req.body.user.password;

  User.register(user, pasword, function(err, user){
    if (err) { return res.status(404).send({error: err}) }
    return res.status(201).json({
      user: user
    })
  })

}
