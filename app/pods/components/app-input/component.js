import Ember from 'ember';

const CLASS_NAME = 'app-input--helper';

export default Ember.Component.extend({
  tagName: 'label',

  classNames: ['app-input'],

  init() {
    var className = CLASS_NAME;

    if (this.get('modifer') !== undefined) {
      className += '__' + this.get('modifer');
    }

    this.set('className', className);
    return this._super(...arguments);
  },
});
