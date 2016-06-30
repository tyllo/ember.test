import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-sort', 'Integration | Component | filter sort', {
  integration: true,

  beforeEach() {
    this.set('name', 'sort name');
    this.set('direction', 'asc');
    this.set('sortName', 'sortName');
  },
});

test('it renders', function(assert) {
  this.render(hbs`{{filter-sort
    name = (readonly   name)
    direction = (mut direction)
    sortName = (mut sortName)
  }}`);

  assert.equal(this.$().text().trim(), '');
});

test('it should set text', function(assert) {
  this.set('text', 'template block text');

  this.render(hbs`{{filter-sort
    text = (readonly text)
    name = (readonly name)
    direction = (mut direction)
    sortName = (mut sortName)
  }}`);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it should set sort-up on asc', function(assert) {
  this.set('name', 'sort name');
  this.set('sortName', 'sort name');

  this.render(hbs`{{filter-sort
    name = (readonly name)
    direction = (mut direction)
    sortName = (mut sortName)
  }}`);

  assert.ok(this.$('.sort-up').length);
});

test('it should set sort-down on desc', function(assert) {
  this.set('name', 'sort name');
  this.set('direction', 'desc');
  this.set('sortName', 'sort name');

  this.render(hbs`{{filter-sort
    name = (readonly name)
    direction = (mut direction)
    sortName = (mut sortName)
  }}`);

  assert.ok(this.$('.sort-down').length);
});

test('it shouldn\'t on another sortName', function(assert) {
  this.set('name', 'sort name');
  this.set('direction', 'desc');
  this.set('sortName', 'another sort name');

  this.render(hbs`{{filter-sort
    name = (readonly name)
    direction = (mut direction)
    sortName = (mut sortName)
  }} `);

  assert.equal(this.$('.sort-up').length, 0, '- set sort-up');
  assert.equal(this.$('.sort-down').length, 0, '- set sort-down');
});



test('it shouldn on click', function(assert) {
    this.set('name', 'sort name');
    this.set('direction', 'desc');
    this.set('sortName', 'another sort name');

  this.render(hbs`{{filter-sort
      name = (readonly name)
      direction = (mut direction)
      sortName = (mut sortName)
    }}
  `);

  assert.notOk(this.$('.sort-up').length, '- not set sort-up before click');
  assert.notEqual(this.get('sortName'), this.get('name'), '- sortName not equal name before click');

  this.$('a').click();
  assert.ok(this.$('.sort-up').length, '- set sort-up');
  assert.equal(this.get('sortName'), this.get('name'), '- update sortName and equal name');
  assert.equal(this.get('direction'), 'asc', '- set direction is asc');

  this.$('a').click();
  assert.ok(this.$('.sort-down').length, '- set sort-down');
  assert.equal(this.get('direction'), 'desc', '- set direction is desc');
});
