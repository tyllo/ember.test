import { formatCurrency } from 'frontend/helpers/format-currency';
import { module, test } from 'qunit';

module('Unit | Helper | format currency');

test('it works', function(assert) {
  let result = formatCurrency([1000]);
  assert.equal(result, '1 000');
});

test('it should foram nuber like currency', function(assert) {
  let result = formatCurrency([1000000]);
  assert.equal(result, '1 000 000');
});
