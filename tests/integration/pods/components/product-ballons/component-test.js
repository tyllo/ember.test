import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-ballons', 'Integration | Component | product ballons', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{product-ballons}}`);
  assert.ok(this.$('.product-ballon-list').length);
});

test('it should show novelty', function(assert) {
  this.set('stub', true);
  this.render(hbs`{{product-ballons
    isNovelty = (readonly stub)
  }}`);
  assert.equal(this.$().text().trim(), 'НОВИНКА');
});

test('it should show bestseller', function(assert) {
  this.set('stub', true);
  this.render(hbs`{{product-ballons
    isBestseller = (readonly stub)
  }}`);
  assert.equal(this.$().text().trim(), 'ХИТ');
});
