import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['product-nav'],

  actions: {
    toggleInStock() {
      this.toggleProperty('inStock');
    }
  },
});
