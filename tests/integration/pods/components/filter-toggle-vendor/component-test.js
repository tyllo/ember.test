import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-toggle-vendor', 'Integration | Component | filter toggle vendor', {
  integration: true,

  beforeEach() {
    this.set('model', []);
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{filter-toggle-vendor model=(readonly model)}}`);
  assert.ok(this.$('ul'));
});

test('it should open on checked', function(assert) {
  this.set('model', [{ checked: true }]);
  this.render(hbs`{{filter-toggle-vendor model = (readonly model)}}`);
  assert.ok(this.$('.open').length);
});

test('it should close on not checked', function(assert) {
  this.set('model', []);
  this.render(hbs`{{filter-toggle-vendor model = (readonly model)}}`);
  assert.ok(this.$('.close').length);
});

test('it should close on checked', function(assert) {
  this.set('model', [{ checked: false }]);
  this.render(hbs`{{filter-toggle-vendor model = (readonly model)}}`);
  assert.ok(this.$('.close').length);
});

test('it should on click checkbox', function(assert) {
  let done = assert.async();
  let $input;

  this.set('model', [{ name: 'test name', checked: false }]);

  this.set('stub', () => {
    assert.ok($input[0].checked, '- checked input');
    done();
  });

  this.render(hbs`{{filter-toggle-vendor
    model = (readonly model)
    setModel = (action stub)
  }}`);

  $input = $(this.$('input'));
  assert.notOk($input[0].checked, '- before click not checked');

  $input.click();
});
