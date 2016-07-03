import Ember from 'ember';

export function isEq([a, b]/*, hash*/) {
  if (a === undefined) { return false; }
  return a.toString() === b.toString();
}

export default Ember.Helper.helper(isEq);
