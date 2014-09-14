var jwt = require("jsonwebtoken");

module.exports = function(options){
  this.options = options || {}

  this.encode = function(user){
    var encoded = jwt.sign(user, 'top-secret', this.options)
    return encoded;
  };

  this.decode = function(token){
    var decoded = jwt.decode(token)
    return decoded;
  };

}
