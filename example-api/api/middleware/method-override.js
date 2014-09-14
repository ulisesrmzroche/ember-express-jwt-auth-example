var methodOverride = require('method-override');

module.exports = function(api) {
  // checks request.body for HTTP method overrides
  api.use(methodOverride());
}
