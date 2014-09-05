import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ExampleAppENV.locationType
});

Router.map(function() {
  this.route('signup');
});

export default Router;
