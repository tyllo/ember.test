import Ember from 'ember';

/** @param {Number[]} params */
export function isEqualByModul(params/*, hash*/) {
  const [index, count] = params;

  return index && (index % count === 0);
}

export default Ember.Helper.helper(isEqualByModul);
