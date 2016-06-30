import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it should setup controller', function(assert) {
  let route = this.subject();
  let controller = Ember.Object.create();
  let meta = { name: 'test meta' };
  let model = Ember.Object.create({meta});

  route.setupController(controller, model);

  assert.deepEqual(controller.get('model'), model, '- set model');
  assert.deepEqual(controller.get('meta'), meta, '- set meta');
});

test('it should refresh route on change query params', function(assert) {
  let done = assert.async();

  let refresh = () => {
    assert.ok(true);
    done();
  };

  let route = this.subject({refresh});
  route.send('queryParamsDidChange');

});
