import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-list-item', 'Integration | Component | product list item', {
  integration: true,

  beforeEach() {
    this.set('product', {});
    this.set('addToBasket', () => {});
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{product-list-item
    product = (readonly product)
    addToBasket = (action addToBasket)
  }}`);

  assert.ok(this.$('.product__4x').length);
});

test('it should send action on click btn add basket', function(assert) {
  let done = assert.async();

  this.set('addToBasket', () => {
    assert.ok(true);
    done();
  });

  this.render(hbs`{{product-list-item
    product = (readonly product)
    addToBasket = (action addToBasket)
  }}`);

  this.$('a.product--basket__btn').click();
});
