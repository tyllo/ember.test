import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-list', 'Integration | Component | product list', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{product-list}}`);
  assert.ok(this.$('.product-list').length);
});

test('it should show product item', function(assert) {
  this.set('model', [{}]);

  this.set('stub', () => {});

  this.render(hbs`{{product-list
    model = (readonly model)
    addToBasket = (action stub)
  }}`);

  assert.ok(this.$('.product__4x').length);
});

test('it should show divider product item', function(assert) {
  this.set('model', [{}, {}, {}, {}, {}]);

  this.set('stub', () => {});

  this.render(hbs`{{product-list
    model = (readonly model)
    addToBasket = (action stub)
  }}`);

  assert.ok(this.$('.product__line').length);
});
