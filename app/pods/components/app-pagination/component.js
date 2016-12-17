import Ember from 'ember';

/**
 * @param {Number} total
 */
export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['pagination'],

  pages: Ember.computed('total', function() {
    var pages = [];
    for(let index = 1; index <= this.get('total'); index++) {
      pages.push({index});
    }

    return pages;
  })
});
