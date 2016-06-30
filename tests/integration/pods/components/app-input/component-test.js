import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const CLASS_NAME = 'app-input--helper';

moduleForComponent('app-input', 'Integration | Component | app input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{app-input}}`);
  assert.ok(this.$('label.app-input').length);
});

test('it should render template block', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#app-input}}
      template block text
    {{/app-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it should set modifer on class', function(assert) {
  this.render(hbs`{{app-input}}`);
  assert.ok(this.$(`.${CLASS_NAME}`).length);

  this.set('modifer', 'modifer');
  this.render(hbs`{{app-input modifer=(readonly modifer)}}`);
  assert.ok(this.$(`.${CLASS_NAME}__modifer`).length);
});
