module.exports = function(api) {

  api.get('/', require('./routes/index'))

  api.route('/users')
      .post(require('./routes/users/create'))
}
