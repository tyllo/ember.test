import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    Ember.run.once('didReceiveAttrs', this._setOpenParam.bind(this));
    return this._super(...arguments);
  },

  actions: {
    setModel(value) {
      this.attrs.model.update(value);
    }
  },

  _setOpenParam() {
    this.set('isOpen', !!this.get('model'));
  },
});
