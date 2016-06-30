import Ember from 'ember';

export function isEqualByModul([index, count]/*, hash*/) {
  return index && (index % count === 0);
}

export default Ember.Helper.helper(isEqualByModul);
