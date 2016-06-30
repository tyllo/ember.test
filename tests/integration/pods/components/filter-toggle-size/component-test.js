import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-toggle-size', 'Integration | Component | filter toggle size', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{filter-toggle-price}}`);
  assert.equal(this.$('input[type=tel]').length, 2);
});

test('it should open on checked', function(assert) {
  this.set('model', [{}]);
  this.render(hbs`{{filter-toggle-size model = (readonly model)}}`);
  assert.ok(this.$('.open').length);
});

test('it should close on not checked', function(assert) {
  this.set('model', []);
  this.render(hbs`{{filter-toggle-size model = (readonly model)}}`);
  assert.ok(this.$('.close').length);
});
