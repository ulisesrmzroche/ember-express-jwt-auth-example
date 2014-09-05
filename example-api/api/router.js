module.exports = RouterV1 = function(api){
  api.route("/users")
     .post(require('./routes/users/create'))
}
