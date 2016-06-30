import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  actions: {
    toggle() {
      this.toggleProperty('isOpen');
    }
  }
});
