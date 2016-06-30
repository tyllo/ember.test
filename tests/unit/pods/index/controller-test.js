import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:index', 'Unit | Controller | index', {
});

test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('it should set totalPages from meta', function(assert) {
  let controller = this.subject({ count: 10, meta: { total: 17 }});
  assert.equal(controller.get('totalPages'), 2, '- some pages');
});

test('it should set totalPages is 1 from meta', function(assert) {
  let controller = this.subject({ count: 10, meta: { total: 0 }});
  assert.equal(controller.get('totalPages'), 1, '- one page if total is 0');
});

test('it should show paginator', function(assert) {
  let controller = this.subject({ count: 10, meta: { total: 11 }});
  assert.equal(controller.get('isShowPagination'), true);
});

test('it should hide paginator on empty models', function(assert) {
  let controller = this.subject({ count: 10, meta: { total: 0 }});
  assert.equal(controller.get('isShowPagination'), false);
});

test('it should hide paginator', function(assert) {
  let controller = this.subject({ count: 10, meta: { total: 9 }});
  assert.equal(controller.get('isShowPagination'), false);
});

test('it should set memoryList from meta', function(assert) {
  let meta = { memorys: ['test']};
  let expect = [{name: 'test', checked: false}];
  let controller = this.subject({ meta });
  assert.deepEqual(controller.get('memoryList'), expect);
});

test('it should set checked memoryList from meta is in queryParams', function(assert) {
  let memory = ['test 1'];
  let meta = { memorys: ['test 1', 'test 2']};
  let expect = [
    { name: 'test 1', checked: true },
    { name: 'test 2', checked: false }
  ];

  let controller = this.subject({ meta, memory });
  assert.deepEqual(controller.get('memoryList'), expect);
});

test('it should set vendorList from meta', function(assert) {
  let meta = { vendors: [{ name: 'test', count: 10 }]};
  let expect = [{name: 'test', count: 10, checked: false}];
  let controller = this.subject({ meta });
  assert.deepEqual(controller.get('vendorList'), expect);
});

test('it should set checked vendorList from meta is in queryParams', function(assert) {
  let vendor = ['test'];
  let meta = { vendors: [{ name: 'test', count: 10 }]};
  let expect = [{name: 'test', count: 10, checked: true}];
  let controller = this.subject({ meta, vendor });
  assert.deepEqual(controller.get('vendorList'), expect);
});

test('it should add product to basket', function(assert) {
  let done = assert.async();
  let controller = this.subject();

  let cachedAlert = window.alert;
  let product = { model: 'test product' };

  window.alert = (expect) => {
    assert.equal(expect, `Product "${product.model}" add to Your basket`);
    done();
  };

  controller.send('addToBasket', product);

  window.alert = cachedAlert;
});
