import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-toggle-block', 'Integration | Component | filter toggle block', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{filter-toggle-block}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`{{#filter-toggle-block}}
    template block text
  {{/filter-toggle-block}}`);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it should on param isOpen', function(assert) {
  this.set('isOpen', false);

  this.render(hbs`{{filter-toggle-block
    isOpen = (readonly isOpen)
  }}`);

  assert.ok(this.$('header.close').length, '- close if isOpen is false');
  assert.ok(this.$('.hide').length, '- filter_toggle-block hide');

  this.set('isOpen', true);
  this.render(hbs`{{filter-toggle-block
    isOpen = (readonly isOpen)
  }}`);

  assert.ok(this.$('header.open').length, '- open if isOpen is true');
  assert.notOk(this.$('.hide').length, '- filter_toggle-block open');
});

test('it should on click', function(assert) {
  this.render(hbs`{{filter-toggle-block}}`);

  assert.ok(this.$('header.close').length, '- close before click');
  assert.ok(this.$('.hide').length, '- filter_toggle-block hide before click');

  this.$('header').click();
  assert.ok(this.$('header.open').length, '- open on 1 click');
  assert.notOk(this.$('.hide').length, '- filter_toggle-block open on 1 click');

  this.$('header').click();
  assert.ok(this.$('header.close').length, '- open on 2 click');
  assert.ok(this.$('.hide').length, '- filter_toggle-block open on 2 click');
});
