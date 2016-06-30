import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-rating', 'Integration | Component | product rating', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{product-rating}}`);
  assert.ok(this.$('.product-rating').length);
});

test('it should set rating', function(assert) {
  let stub = 4;
  this.set('rating', stub);
  this.render(hbs`{{product-rating rating=(readonly rating)}}`);
  assert.ok(this.$(`.product-rating--stars__${stub}`).length);
});

test('it should set link to review', function(assert) {
  this.set('review', 'test review');
  this.render(hbs`{{product-rating review=(readonly review)}}`);
  assert.equal(this.$().text().trim(), 'test review');
});
