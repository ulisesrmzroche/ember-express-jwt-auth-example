var bodyParser = require('body-parser');

module.exports = function(api) {
  // parse application/x-www-form-urlencoded
  api.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  api.use(bodyParser.json())

}
