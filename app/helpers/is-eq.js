import Ember from 'ember';

/** @param {String[]} params */
export function isEq(params/*, hash*/) {
  const [a, b] = params;

  if (a === undefined) { return false; }
  return a.toString() === b.toString();
}

export default Ember.Helper.helper(isEq);
