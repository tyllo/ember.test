import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['asc:sort-up', 'desc:sort-down'],

  didReceiveAttrs({newAttrs}) {
    if (newAttrs.sortName.value !== newAttrs.name) {
      this.set('asc', false);
      this.set('desc', false);
    } else {
      this.set('asc', newAttrs.direction.value === 'asc');
      this.set('desc', newAttrs.direction.value === 'desc');
    }
  },

  click() {
    const direction = this.get('direction') === 'desc' ? 'asc' : 'desc';

    this.attrs.direction.update(direction);
    this.attrs.sortName.update(this.get('name'));
  },
});
