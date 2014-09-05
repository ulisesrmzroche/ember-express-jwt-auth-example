import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('user')
  },
  actions: function(){
    return this.get('currentModel').save()
    .then(function(){
      alert("Epic Win")
    }).catch(function(e){
      alert("Oops, something went wrong")
    })
  }
});
