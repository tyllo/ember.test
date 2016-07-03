import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('notebook', params);
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('meta', model.get('meta'));
  },

  serializeQueryParam(value, urlKey, defaultValueType) {
    if (defaultValueType === 'array') {
      return JSON.stringify(value).replace(/"/g, '');
    }

    return this._super(...arguments);
  },

  deserializeQueryParam(value, urlKey, defaultValueType) {
    if (defaultValueType === 'array') {
      return value.replace(/(\[|\])/g, '').split(',');
    }

    return this._super(...arguments);
  },

  actions: {
    queryParamsDidChange(/*changed, totalPresent, removed*/) {
      this.refresh();
    },
  },
});
