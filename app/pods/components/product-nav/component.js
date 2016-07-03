import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['product-nav'],

  actions: {
    toggleAvailability() {
      this.toggleProperty('availability');
    }
  },
});
