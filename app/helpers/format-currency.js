import Ember from 'ember';

const PATTERN = /(\d)(?=(\d\d\d)+([^\d]|$))/g;

/** @param {String[]} params */
export function formatCurrency(params/*, hash*/) {
  let [value] = params;

  if (value !== undefined) {
    value = value.toString().replace(PATTERN, '$1 ');
  }

  return value;
}

export default Ember.Helper.helper(formatCurrency);
