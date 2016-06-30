import { moduleFor, test } from 'ember-qunit';

const NAMESPACE = 'api';

moduleFor('adapter:application', 'Unit | Adapter | application', {
});

test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});

test('it should have namespace', function(assert) {
  let adapter = this.subject();
  assert.equal(adapter.get('namespace'), NAMESPACE, `- NAMESPACE`);
});
