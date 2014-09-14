var morgan = require('morgan')

module.exports = function(api){
  // http request logger
  api.use(morgan('combined'))
}
