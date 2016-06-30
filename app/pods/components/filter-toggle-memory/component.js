import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  init() {
    Ember.run.once('didReceiveAttrs', this._setOpenParam.bind(this));
    this._super(...arguments);
  },

  actions: {
    checked(index) {
      this.toggleProperty(`model.${index}.checked`);

      var model = this.get('model')
        .filter(({checked}) => checked)
        .map(({name}) => name);

      this.sendAction('setModel', model);
    },
  },

  _setOpenParam() {
    var isOpen = this.get('model').find(({checked}) => checked);
    this.set('isOpen', !!isOpen);
  },
});
