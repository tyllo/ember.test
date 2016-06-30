import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('notebook', params);
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('meta', model.get('meta'));
  },

  actions: {
    queryParamsDidChange(/*changed, totalPresent, removed*/) {
      this.refresh();
    },
  },
});
