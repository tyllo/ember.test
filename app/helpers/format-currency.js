import Ember from 'ember';

let PATTERN = /(\d)(?=(\d\d\d)+([^\d]|$))/g;

export function formatCurrency([value]/*, hash*/) {
  if (value !== undefined) {
    value = value.toString().replace(PATTERN, '$1 ');
  }

  return value;
}

export default Ember.Helper.helper(formatCurrency);
