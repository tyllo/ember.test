import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-toggle-price', 'Integration | Component | filter toggle price', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{filter-toggle-price}}`);
  assert.equal(this.$('input[type=tel]').length, 2);
});

test('it should open on checked', function(assert) {
  this.set('model', [{ length: 1 }]);
  this.render(hbs`{{filter-toggle-price model = (readonly model)}}`);
  assert.ok(this.$('.open').length);
});
