import Ember from 'ember';
import inputTel from 'frontend/utils/input-tel';

export default Ember.Component.extend({
  init() {
    Ember.run.once('didReceiveAttrs', this._setOpenParam.bind(this));
    this._super(...arguments);
  },

  didInsertElement() {
    inputTel(this.$('input[type=tel]'));
  },

  from: Ember.computed.alias('model[0]'),

  to: Ember.computed.alias('model[1]'),

  _setOpenParam() {
    this.set('isOpen', this.get('model.length'));
  },
});
