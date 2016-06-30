import { isEqualByModul } from 'frontend/helpers/is-equal-by-modul';
import { module, test } from 'qunit';

module('Unit | Helper | is equal by modul');

test('it works', function(assert) {
  let result = isEqualByModul([8, 4]);
  assert.ok(result);
});

test('it should equal by modul', function(assert) {
  let result = isEqualByModul([20, 5]);
  assert.equal(result, true);
});

test('it shouldn\'t equal by modul', function(assert) {
  let result = isEqualByModul([20, 6]);
  assert.equal(result, false);
});
