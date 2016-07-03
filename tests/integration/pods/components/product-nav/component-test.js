import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-nav', 'Integration | Component | product nav', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{product-nav}}`);
  assert.ok(this.$('.product-nav').length);
});

test('it should show', function(assert) {
  this.render(hbs`{{product-nav}}`);

  let text = this.$('.product-nav').text();
  assert.ok(/новинкам/i.test(text), '- filter novelity');
  assert.ok(/цене/i.test(text), '- filter price');
  assert.ok(/популярности/i.test(text), '- filter bestseller');
  assert.ok(/В наличии/i.test(text), '- filter availability');
});

test('it should send action toggle availability param', function(assert) {
  this.set('availability', false);
  this.render(hbs`{{product-nav availability=(mut availability)}}`);

  $(this.$('input[type=checkbox]')).click();
  assert.equal(this.get('availability'), true, '- set to true on 1 click');

  $(this.$('input[type=checkbox]')).click();
  assert.equal(this.get('availability'), false, '- set to false on 2 click');
});
