import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-toggle-ssd', 'Integration | Component | filter toggle ssd', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{filter-toggle-ssd}}`);
  assert.equal(this.$('input[type=radio]').length, 2);
});

test('it should open on checked', function(assert) {
  this.set('model', true);
  this.render(hbs`{{filter-toggle-ssd model = (mut model)}}`);
  assert.ok(this.$('.open').length);
});

test('it should close on not checked', function(assert) {
  this.set('model', false);
  this.render(hbs`{{filter-toggle-ssd model = (mut model)}}`);
  assert.ok(this.$('.close').length);
});

test('it should update model on click', function(assert) {
  this.set('model', true);
  this.render(hbs`{{filter-toggle-ssd model = (mut model)}}`);

  this.$('input[name=false]').click();
  assert.equal(this.$('input[name=true]')[0].checked, false, '- input[name=true] is false');
  assert.equal(this.$('input[name=false]')[0].checked, true, '- input[name=false] is true');
  assert.equal(this.get('model'), false, '- set model false');

  this.$('input[name=true]').click();
  assert.equal(this.$('input[name=true]')[0].checked, true, '- input[name=true] is true');
  assert.equal(this.$('input[name=false]')[0].checked, false, '- input[name=false] is false');
  assert.equal(this.get('model'), true, '- set model true');
});
