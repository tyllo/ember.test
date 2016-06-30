/* global $ */
import inputTel, { isNumberKeyCode } from 'frontend/utils/input-tel';
import { module, test } from 'qunit';

module('Unit | Utility | input tel', {
  beforeEach() {
    var input = document.createElement('INPUT');
    input.type = 'tel';
    this.$input = $(input);
  },

  afterEach() {
    this.$input = null;
  },
});

test('it works', function(assert) {
  let result = inputTel(this.$input);
  assert.ok(result);
});

test('it should set number on key-press in input', function(assert) {
  let result = isNumberKeyCode({ keyCode: '3'.charCodeAt() });
  assert.equal(result, true);
});

test('it shouldn\'t set char on key-press in input', function(assert) {
  let result = isNumberKeyCode({ keyCode: 'A'.charCodeAt() });
  assert.equal(result, false);
});
