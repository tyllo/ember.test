import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-pagination', 'Integration | Component | app pagination', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{app-pagination}}`);
  assert.ok(this.$('nav.pagination').length);
});

test('it should set pages', function(assert) {
  this.set('total', 10);
  this.render(hbs`{{app-pagination total=(readonly total)}}`);
  assert.equal(this.$('.pagination--link').length, 10);
});
