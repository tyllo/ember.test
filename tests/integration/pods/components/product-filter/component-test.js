import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-filter', 'Integration | Component | product filter', {
  integration: true,

  beforeEach() {
    this.set('price', []);
    this.set('size', []);
    this.set('memoryList', []);
    this.set('vendorList', []);
    this.set('stub', () => {});
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{product-filter
    ssd = (mut ssd)
    price = (mut price)
    size = (mut size)
    setMemory = (action (mut memory))
    memoryList = (readonly memoryList)
    setVendor = (action (mut vendor))
    vendorList = (readonly vendorList)
    reset = (action stub)
  }}`);

  assert.ok(this.$('.product-filter').length);
});

test('it should contain', function(assert) {
  this.render(hbs`{{product-filter
    ssd = (mut ssd)
    price = (mut price)
    size = (mut size)
    setMemory = (action (mut memory))
    memoryList = (readonly memoryList)
    setVendor = (action (mut vendor))
    vendorList = (readonly vendorList)
    reset = (action stub)
  }}`);

  let text = this.$('.product-filter').text();
  assert.ok(/Производитель/.test(text), '- filter vendor');
  assert.ok(/Цена, руб./.test(text), '- filter price');
  assert.ok(/Диагональ экрана, дюймы/.test(text), '- filter size');
  assert.ok(/Размер оперативной памяти/.test(text), '- filter memory');
  assert.ok(/Наличие SSD/.test(text), '- filter ssd');
});

test('it should send \'reset\' action', function(assert) {
  let done = assert.async();

  this.set('stub', () => {
    assert.ok(true);
    done();
  });

  this.render(hbs`{{product-filter
    ssd = (mut ssd)
    price = (mut price)
    size = (mut size)
    setMemory = (action (mut memory))
    memoryList = (readonly memoryList)
    setVendor = (action (mut vendor))
    vendorList = (readonly vendorList)
    reset = (action stub)
  }}`);

  this.$('.product--basket__btn.extend').click();
});
