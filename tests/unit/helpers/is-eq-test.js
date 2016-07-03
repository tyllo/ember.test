import { isEq } from 'frontend/helpers/is-eq';
import { module, test } from 'qunit';

module('Unit | Helper | is eq');

test('it should equal', function(assert) {
  let result = isEq([10, 10]);
  assert.equal(result, true);
});

test('it shouldn\'t equal', function(assert) {
  let result = isEq([10, 1]);
  assert.equal(result, false);
});
