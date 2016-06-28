define('frontend/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('frontend/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('frontend/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('frontend/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('frontend/tests/helpers/format-currency.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-currency.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-currency.js should pass jshint.');
  });
});
define('frontend/tests/helpers/is-equal-by-modul.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/is-equal-by-modul.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/is-equal-by-modul.js should pass jshint.');
  });
});
define('frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'frontend/tests/helpers/start-app', 'frontend/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _frontendTestsHelpersStartApp, _frontendTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _frontendTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _frontendTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('frontend/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('frontend/tests/helpers/resolver', ['exports', 'ember-resolver', 'frontend/config/environment'], function (exports, _emberResolver, _frontendConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _frontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _frontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('frontend/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('frontend/tests/helpers/start-app', ['exports', 'ember', 'frontend/app', 'frontend/config/environment'], function (exports, _ember, _frontendApp, _frontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _frontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _frontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('frontend/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/app-input/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  var CLASS_NAME = 'app-input--helper';

  (0, _emberQunit.moduleForComponent)('app-input', 'Integration | Component | app input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'app-input', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('label.app-input').length);
  });

  (0, _emberQunit.test)('it should render template block', function (assert) {
    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'app-input', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

  (0, _emberQunit.test)('it should set modifer on class', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'app-input', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.' + CLASS_NAME).length);

    this.set('modifer', 'modifer');
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 40
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'app-input', [], ['modifer', ['subexpr', 'readonly', [['get', 'modifer', ['loc', [null, [1, 30], [1, 37]]]]], [], ['loc', [null, [1, 20], [1, 38]]]]], ['loc', [null, [1, 0], [1, 40]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.' + CLASS_NAME + '__modifer').length);
  });
});
define('frontend/tests/integration/pods/components/app-input/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/app-input/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/app-input/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/app-pagination/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('app-pagination', 'Integration | Component | app pagination', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'app-pagination', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('nav.pagination').length);
  });

  (0, _emberQunit.test)('it should set pages', function (assert) {
    this.set('total', 10);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 41
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'app-pagination', [], ['total', ['subexpr', 'readonly', [['get', 'total', ['loc', [null, [1, 33], [1, 38]]]]], [], ['loc', [null, [1, 23], [1, 39]]]]], ['loc', [null, [1, 0], [1, 41]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$('.pagination--link').length, 10);
  });
});
define('frontend/tests/integration/pods/components/app-pagination/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/app-pagination/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/app-pagination/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/filter-sort/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('filter-sort', 'Integration | Component | filter sort', {
    integration: true,

    beforeEach: function beforeEach() {
      this.set('name', 'sort name');
      this.set('direction', 'asc');
      this.set('sortName', 'sortName');
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-sort', [], ['name', ['subexpr', 'readonly', [['get', 'name', ['loc', [null, [2, 23], [2, 27]]]]], [], ['loc', [null, [2, 11], [2, 28]]]], 'direction', ['subexpr', 'mut', [['get', 'direction', ['loc', [null, [3, 21], [3, 30]]]]], [], ['loc', [null, [3, 16], [3, 31]]]], 'sortName', ['subexpr', 'mut', [['get', 'sortName', ['loc', [null, [4, 20], [4, 28]]]]], [], ['loc', [null, [4, 15], [4, 29]]]]], ['loc', [null, [1, 0], [5, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');
  });

  (0, _emberQunit.test)('it should set text', function (assert) {
    this.set('text', 'template block text');

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 6,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-sort', [], ['text', ['subexpr', 'readonly', [['get', 'text', ['loc', [null, [2, 21], [2, 25]]]]], [], ['loc', [null, [2, 11], [2, 26]]]], 'name', ['subexpr', 'readonly', [['get', 'name', ['loc', [null, [3, 21], [3, 25]]]]], [], ['loc', [null, [3, 11], [3, 26]]]], 'direction', ['subexpr', 'mut', [['get', 'direction', ['loc', [null, [4, 21], [4, 30]]]]], [], ['loc', [null, [4, 16], [4, 31]]]], 'sortName', ['subexpr', 'mut', [['get', 'sortName', ['loc', [null, [5, 20], [5, 28]]]]], [], ['loc', [null, [5, 15], [5, 29]]]]], ['loc', [null, [1, 0], [6, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

  (0, _emberQunit.test)('it should set sort-up on asc', function (assert) {
    this.set('name', 'sort name');
    this.set('sortName', 'sort name');

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-sort', [], ['name', ['subexpr', 'readonly', [['get', 'name', ['loc', [null, [2, 21], [2, 25]]]]], [], ['loc', [null, [2, 11], [2, 26]]]], 'direction', ['subexpr', 'mut', [['get', 'direction', ['loc', [null, [3, 21], [3, 30]]]]], [], ['loc', [null, [3, 16], [3, 31]]]], 'sortName', ['subexpr', 'mut', [['get', 'sortName', ['loc', [null, [4, 20], [4, 28]]]]], [], ['loc', [null, [4, 15], [4, 29]]]]], ['loc', [null, [1, 0], [5, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$('.sort-up').length);
  });

  (0, _emberQunit.test)('it should set sort-down on desc', function (assert) {
    this.set('name', 'sort name');
    this.set('direction', 'desc');
    this.set('sortName', 'sort name');

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-sort', [], ['name', ['subexpr', 'readonly', [['get', 'name', ['loc', [null, [2, 21], [2, 25]]]]], [], ['loc', [null, [2, 11], [2, 26]]]], 'direction', ['subexpr', 'mut', [['get', 'direction', ['loc', [null, [3, 21], [3, 30]]]]], [], ['loc', [null, [3, 16], [3, 31]]]], 'sortName', ['subexpr', 'mut', [['get', 'sortName', ['loc', [null, [4, 20], [4, 28]]]]], [], ['loc', [null, [4, 15], [4, 29]]]]], ['loc', [null, [1, 0], [5, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$('.sort-down').length);
  });

  (0, _emberQunit.test)('it shouldn\'t on another sortName', function (assert) {
    this.set('name', 'sort name');
    this.set('direction', 'desc');
    this.set('sortName', 'another sort name');

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 5
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(' ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [['inline', 'filter-sort', [], ['name', ['subexpr', 'readonly', [['get', 'name', ['loc', [null, [2, 21], [2, 25]]]]], [], ['loc', [null, [2, 11], [2, 26]]]], 'direction', ['subexpr', 'mut', [['get', 'direction', ['loc', [null, [3, 21], [3, 30]]]]], [], ['loc', [null, [3, 16], [3, 31]]]], 'sortName', ['subexpr', 'mut', [['get', 'sortName', ['loc', [null, [4, 20], [4, 28]]]]], [], ['loc', [null, [4, 15], [4, 29]]]]], ['loc', [null, [1, 0], [5, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('.sort-up').length, 0, '- set sort-up');
    assert.equal(this.$('.sort-down').length, 0, '- set sort-down');
  });

  (0, _emberQunit.test)('it shouldn on click', function (assert) {
    this.set('name', 'sort name');
    this.set('direction', 'desc');
    this.set('sortName', 'another sort name');

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 6,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [['inline', 'filter-sort', [], ['name', ['subexpr', 'readonly', [['get', 'name', ['loc', [null, [2, 23], [2, 27]]]]], [], ['loc', [null, [2, 13], [2, 28]]]], 'direction', ['subexpr', 'mut', [['get', 'direction', ['loc', [null, [3, 23], [3, 32]]]]], [], ['loc', [null, [3, 18], [3, 33]]]], 'sortName', ['subexpr', 'mut', [['get', 'sortName', ['loc', [null, [4, 22], [4, 30]]]]], [], ['loc', [null, [4, 17], [4, 31]]]]], ['loc', [null, [1, 0], [5, 6]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.notOk(this.$('.sort-up').length, '- not set sort-up before click');
    assert.notEqual(this.get('sortName'), this.get('name'), '- sortName not equal name before click');

    this.$('a').click();
    assert.ok(this.$('.sort-up').length, '- set sort-up');
    assert.equal(this.get('sortName'), this.get('name'), '- update sortName and equal name');
    assert.equal(this.get('direction'), 'asc', '- set direction is asc');

    this.$('a').click();
    assert.ok(this.$('.sort-down').length, '- set sort-down');
    assert.equal(this.get('direction'), 'desc', '- set direction is desc');
  });
});
define('frontend/tests/integration/pods/components/filter-sort/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/filter-sort/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/filter-sort/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-block/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('filter-toggle-block', 'Integration | Component | filter toggle block', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 23
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'filter-toggle-block', ['loc', [null, [1, 0], [1, 23]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.6.1',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 3,
                'column': 2
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('    template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 26
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['block', 'filter-toggle-block', [], [], 0, null, ['loc', [null, [1, 0], [3, 26]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

  (0, _emberQunit.test)('it should on param isOpen', function (assert) {
    this.set('isOpen', false);

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-block', [], ['isOpen', ['subexpr', 'readonly', [['get', 'isOpen', ['loc', [null, [2, 23], [2, 29]]]]], [], ['loc', [null, [2, 13], [2, 30]]]]], ['loc', [null, [1, 0], [3, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$('header.close').length, '- close if isOpen is false');
    assert.ok(this.$('.hide').length, '- filter_toggle-block hide');

    this.set('isOpen', true);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-block', [], ['isOpen', ['subexpr', 'readonly', [['get', 'isOpen', ['loc', [null, [2, 23], [2, 29]]]]], [], ['loc', [null, [2, 13], [2, 30]]]]], ['loc', [null, [1, 0], [3, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$('header.open').length, '- open if isOpen is true');
    assert.notOk(this.$('.hide').length, '- filter_toggle-block open');
  });

  (0, _emberQunit.test)('it should on click', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 23
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'filter-toggle-block', ['loc', [null, [1, 0], [1, 23]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$('header.close').length, '- close before click');
    assert.ok(this.$('.hide').length, '- filter_toggle-block hide before click');

    this.$('header').click();
    assert.ok(this.$('header.open').length, '- open on 1 click');
    assert.notOk(this.$('.hide').length, '- filter_toggle-block open on 1 click');

    this.$('header').click();
    assert.ok(this.$('header.close').length, '- open on 2 click');
    assert.ok(this.$('.hide').length, '- filter_toggle-block open on 2 click');
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-block/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/filter-toggle-block/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/filter-toggle-block/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-memory/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('filter-toggle-memory', 'Integration | Component | filter toggle memory', {
    integration: true,

    beforeEach: function beforeEach() {
      this.set('model', []);
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 49
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-memory', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 41], [1, 46]]]]], [], ['loc', [null, [1, 31], [1, 47]]]]], ['loc', [null, [1, 0], [1, 49]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('ul'));
  });

  (0, _emberQunit.test)('it should open on checked', function (assert) {
    this.set('model', [{ checked: true }]);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 49
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-memory', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 41], [1, 46]]]]], [], ['loc', [null, [1, 31], [1, 47]]]]], ['loc', [null, [1, 0], [1, 49]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.open').length);
  });

  (0, _emberQunit.test)('it should close on not checked', function (assert) {
    this.set('model', []);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 47
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-size', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 39], [1, 44]]]]], [], ['loc', [null, [1, 29], [1, 45]]]]], ['loc', [null, [1, 0], [1, 47]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.close').length);
  });

  (0, _emberQunit.test)('it should close on checked', function (assert) {
    this.set('model', [{ checked: false }]);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 49
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-memory', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 41], [1, 46]]]]], [], ['loc', [null, [1, 31], [1, 47]]]]], ['loc', [null, [1, 0], [1, 49]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.close').length);
  });

  (0, _emberQunit.test)('it should on click checkbox', function (assert) {
    var done = assert.async();
    var $input = undefined;

    this.set('model', [{ name: 'test name', checked: false }]);

    this.set('stub', function () {
      assert.ok($input[0].checked, '- checked input');
      done();
    });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 4,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-memory', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [2, 22], [2, 27]]]]], [], ['loc', [null, [2, 12], [2, 28]]]], 'setModel', ['subexpr', 'action', [['get', 'stub', ['loc', [null, [3, 23], [3, 27]]]]], [], ['loc', [null, [3, 15], [3, 28]]]]], ['loc', [null, [1, 0], [4, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    $input = $(this.$('input'));
    assert.notOk($input[0].checked, '- before click not checked');

    $input.click();
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-memory/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/filter-toggle-memory/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/filter-toggle-memory/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-price/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('filter-toggle-price', 'Integration | Component | filter toggle price', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 23
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'filter-toggle-price', ['loc', [null, [1, 0], [1, 23]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$('input[type=tel]').length, 2);
  });

  (0, _emberQunit.test)('it should open on checked', function (assert) {
    this.set('model', [{ length: 1 }]);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 48
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-price', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 40], [1, 45]]]]], [], ['loc', [null, [1, 30], [1, 46]]]]], ['loc', [null, [1, 0], [1, 48]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.open').length);
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-price/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/filter-toggle-price/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/filter-toggle-price/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-size/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('filter-toggle-size', 'Integration | Component | filter toggle size', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 23
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'filter-toggle-price', ['loc', [null, [1, 0], [1, 23]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$('input[type=tel]').length, 2);
  });

  (0, _emberQunit.test)('it should open on checked', function (assert) {
    this.set('model', [{}]);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 47
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-size', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 39], [1, 44]]]]], [], ['loc', [null, [1, 29], [1, 45]]]]], ['loc', [null, [1, 0], [1, 47]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.open').length);
  });

  (0, _emberQunit.test)('it should close on not checked', function (assert) {
    this.set('model', []);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 47
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-size', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 39], [1, 44]]]]], [], ['loc', [null, [1, 29], [1, 45]]]]], ['loc', [null, [1, 0], [1, 47]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.close').length);
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-size/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/filter-toggle-size/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/filter-toggle-size/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-ssd/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('filter-toggle-ssd', 'Integration | Component | filter toggle ssd', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 21
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'filter-toggle-ssd', ['loc', [null, [1, 0], [1, 21]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$('input[type=radio]').length, 2);
  });

  (0, _emberQunit.test)('it should open on checked', function (assert) {
    this.set('model', true);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 41
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-ssd', [], ['model', ['subexpr', 'mut', [['get', 'model', ['loc', [null, [1, 33], [1, 38]]]]], [], ['loc', [null, [1, 28], [1, 39]]]]], ['loc', [null, [1, 0], [1, 41]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.open').length);
  });

  (0, _emberQunit.test)('it should close on not checked', function (assert) {
    this.set('model', false);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 41
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-ssd', [], ['model', ['subexpr', 'mut', [['get', 'model', ['loc', [null, [1, 33], [1, 38]]]]], [], ['loc', [null, [1, 28], [1, 39]]]]], ['loc', [null, [1, 0], [1, 41]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.close').length);
  });

  (0, _emberQunit.test)('it should update model on click', function (assert) {
    this.set('model', true);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 41
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-ssd', [], ['model', ['subexpr', 'mut', [['get', 'model', ['loc', [null, [1, 33], [1, 38]]]]], [], ['loc', [null, [1, 28], [1, 39]]]]], ['loc', [null, [1, 0], [1, 41]]]]],
        locals: [],
        templates: []
      };
    })()));

    this.$('input[name=false]').click();
    assert.equal(this.$('input[name=true]')[0].checked, false, '- input[name=true] is false');
    assert.equal(this.$('input[name=false]')[0].checked, true, '- input[name=false] is true');
    assert.equal(this.get('model'), false, '- set model false');

    this.$('input[name=true]').click();
    assert.equal(this.$('input[name=true]')[0].checked, true, '- input[name=true] is true');
    assert.equal(this.$('input[name=false]')[0].checked, false, '- input[name=false] is false');
    assert.equal(this.get('model'), true, '- set model true');
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-ssd/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/filter-toggle-ssd/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/filter-toggle-ssd/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-vendor/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('filter-toggle-vendor', 'Integration | Component | filter toggle vendor', {
    integration: true,

    beforeEach: function beforeEach() {
      this.set('model', []);
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 47
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-vendor', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 39], [1, 44]]]]], [], ['loc', [null, [1, 29], [1, 45]]]]], ['loc', [null, [1, 0], [1, 47]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('ul'));
  });

  (0, _emberQunit.test)('it should open on checked', function (assert) {
    this.set('model', [{ checked: true }]);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 49
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-vendor', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 41], [1, 46]]]]], [], ['loc', [null, [1, 31], [1, 47]]]]], ['loc', [null, [1, 0], [1, 49]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.open').length);
  });

  (0, _emberQunit.test)('it should close on not checked', function (assert) {
    this.set('model', []);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 49
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-vendor', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 41], [1, 46]]]]], [], ['loc', [null, [1, 31], [1, 47]]]]], ['loc', [null, [1, 0], [1, 49]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.close').length);
  });

  (0, _emberQunit.test)('it should close on checked', function (assert) {
    this.set('model', [{ checked: false }]);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 49
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-vendor', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [1, 41], [1, 46]]]]], [], ['loc', [null, [1, 31], [1, 47]]]]], ['loc', [null, [1, 0], [1, 49]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.close').length);
  });

  (0, _emberQunit.test)('it should on click checkbox', function (assert) {
    var done = assert.async();
    var $input = undefined;

    this.set('model', [{ name: 'test name', checked: false }]);

    this.set('stub', function () {
      assert.ok($input[0].checked, '- checked input');
      done();
    });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 4,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'filter-toggle-vendor', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [2, 22], [2, 27]]]]], [], ['loc', [null, [2, 12], [2, 28]]]], 'setModel', ['subexpr', 'action', [['get', 'stub', ['loc', [null, [3, 23], [3, 27]]]]], [], ['loc', [null, [3, 15], [3, 28]]]]], ['loc', [null, [1, 0], [4, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    $input = $(this.$('input'));
    assert.notOk($input[0].checked, '- before click not checked');

    $input.click();
  });
});
define('frontend/tests/integration/pods/components/filter-toggle-vendor/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/filter-toggle-vendor/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/filter-toggle-vendor/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/product-ballons/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('product-ballons', 'Integration | Component | product ballons', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 19
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'product-ballons', ['loc', [null, [1, 0], [1, 19]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.product-ballon-list').length);
  });

  (0, _emberQunit.test)('it should show novelty', function (assert) {
    this.set('stub', true);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-ballons', [], ['isNovelty', ['subexpr', 'readonly', [['get', 'stub', ['loc', [null, [2, 26], [2, 30]]]]], [], ['loc', [null, [2, 16], [2, 31]]]]], ['loc', [null, [1, 0], [3, 4]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), 'НОВИНКА');
  });

  (0, _emberQunit.test)('it should show bestseller', function (assert) {
    this.set('stub', true);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-ballons', [], ['isBestseller', ['subexpr', 'readonly', [['get', 'stub', ['loc', [null, [2, 29], [2, 33]]]]], [], ['loc', [null, [2, 19], [2, 34]]]]], ['loc', [null, [1, 0], [3, 4]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), 'ХИТ');
  });
});
define('frontend/tests/integration/pods/components/product-ballons/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/product-ballons/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/product-ballons/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/product-filter/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('product-filter', 'Integration | Component | product filter', {
    integration: true,

    beforeEach: function beforeEach() {
      this.set('price', []);
      this.set('size', []);
      this.set('memoryList', []);
      this.set('vendorList', []);
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 9,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-filter', [], ['ssd', ['subexpr', 'mut', [['get', 'ssd', ['loc', [null, [2, 15], [2, 18]]]]], [], ['loc', [null, [2, 10], [2, 19]]]], 'price', ['subexpr', 'mut', [['get', 'price', ['loc', [null, [3, 17], [3, 22]]]]], [], ['loc', [null, [3, 12], [3, 23]]]], 'size', ['subexpr', 'mut', [['get', 'size', ['loc', [null, [4, 16], [4, 20]]]]], [], ['loc', [null, [4, 11], [4, 21]]]], 'setMemory', ['subexpr', 'action', [['subexpr', 'mut', [['get', 'memory', ['loc', [null, [5, 29], [5, 35]]]]], [], ['loc', [null, [5, 24], [5, 36]]]]], [], ['loc', [null, [5, 16], [5, 37]]]], 'memoryList', ['subexpr', 'readonly', [['get', 'memoryList', ['loc', [null, [6, 27], [6, 37]]]]], [], ['loc', [null, [6, 17], [6, 38]]]], 'setVendor', ['subexpr', 'action', [['subexpr', 'mut', [['get', 'vendor', ['loc', [null, [7, 29], [7, 35]]]]], [], ['loc', [null, [7, 24], [7, 36]]]]], [], ['loc', [null, [7, 16], [7, 37]]]], 'vendorList', ['subexpr', 'readonly', [['get', 'vendorList', ['loc', [null, [8, 27], [8, 37]]]]], [], ['loc', [null, [8, 17], [8, 38]]]]], ['loc', [null, [1, 0], [9, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$('.product-filter').length);
  });

  (0, _emberQunit.test)('it should contain', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 9,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-filter', [], ['ssd', ['subexpr', 'mut', [['get', 'ssd', ['loc', [null, [2, 15], [2, 18]]]]], [], ['loc', [null, [2, 10], [2, 19]]]], 'price', ['subexpr', 'mut', [['get', 'price', ['loc', [null, [3, 17], [3, 22]]]]], [], ['loc', [null, [3, 12], [3, 23]]]], 'size', ['subexpr', 'mut', [['get', 'size', ['loc', [null, [4, 16], [4, 20]]]]], [], ['loc', [null, [4, 11], [4, 21]]]], 'setMemory', ['subexpr', 'action', [['subexpr', 'mut', [['get', 'memory', ['loc', [null, [5, 29], [5, 35]]]]], [], ['loc', [null, [5, 24], [5, 36]]]]], [], ['loc', [null, [5, 16], [5, 37]]]], 'memoryList', ['subexpr', 'readonly', [['get', 'memoryList', ['loc', [null, [6, 27], [6, 37]]]]], [], ['loc', [null, [6, 17], [6, 38]]]], 'setVendor', ['subexpr', 'action', [['subexpr', 'mut', [['get', 'vendor', ['loc', [null, [7, 29], [7, 35]]]]], [], ['loc', [null, [7, 24], [7, 36]]]]], [], ['loc', [null, [7, 16], [7, 37]]]], 'vendorList', ['subexpr', 'readonly', [['get', 'vendorList', ['loc', [null, [8, 27], [8, 37]]]]], [], ['loc', [null, [8, 17], [8, 38]]]]], ['loc', [null, [1, 0], [9, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    var text = this.$('.product-filter').text();
    assert.ok(/Производитель/.test(text), '- filter vendor');
    assert.ok(/Цена, руб./.test(text), '- filter price');
    assert.ok(/Диагональ экрана, дюймы/.test(text), '- filter size');
    assert.ok(/Размер оперативной памяти/.test(text), '- filter memory');
    assert.ok(/Наличие SSD/.test(text), '- filter ssd');
  });
});
define('frontend/tests/integration/pods/components/product-filter/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/product-filter/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/product-filter/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/product-list/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('product-list', 'Integration | Component | product list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'product-list', ['loc', [null, [1, 0], [1, 16]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.product-list').length);
  });

  (0, _emberQunit.test)('it should show product item', function (assert) {
    this.set('model', [{}]);

    this.set('stub', function () {});

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 4,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-list', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [2, 22], [2, 27]]]]], [], ['loc', [null, [2, 12], [2, 28]]]], 'addToBasket', ['subexpr', 'action', [['get', 'stub', ['loc', [null, [3, 26], [3, 30]]]]], [], ['loc', [null, [3, 18], [3, 31]]]]], ['loc', [null, [1, 0], [4, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$('.product__4x').length);
  });

  (0, _emberQunit.test)('it should show divider product item', function (assert) {
    this.set('model', [{}, {}, {}, {}, {}]);

    this.set('stub', function () {});

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 4,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-list', [], ['model', ['subexpr', 'readonly', [['get', 'model', ['loc', [null, [2, 22], [2, 27]]]]], [], ['loc', [null, [2, 12], [2, 28]]]], 'addToBasket', ['subexpr', 'action', [['get', 'stub', ['loc', [null, [3, 26], [3, 30]]]]], [], ['loc', [null, [3, 18], [3, 31]]]]], ['loc', [null, [1, 0], [4, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$('.product__line').length);
  });
});
define('frontend/tests/integration/pods/components/product-list/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/product-list/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/product-list/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/product-list-item/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('product-list-item', 'Integration | Component | product list item', {
    integration: true,

    beforeEach: function beforeEach() {
      this.set('product', {});
      this.set('addToBasket', function () {});
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 4,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-list-item', [], ['product', ['subexpr', 'readonly', [['get', 'product', ['loc', [null, [2, 24], [2, 31]]]]], [], ['loc', [null, [2, 14], [2, 32]]]], 'addToBasket', ['subexpr', 'action', [['get', 'addToBasket', ['loc', [null, [3, 26], [3, 37]]]]], [], ['loc', [null, [3, 18], [3, 38]]]]], ['loc', [null, [1, 0], [4, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$('.product__4x').length);
  });

  (0, _emberQunit.test)('it should send action on click btn add basket', function (assert) {
    var done = assert.async();

    this.set('addToBasket', function () {
      assert.ok(true);
      done();
    });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 4,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-list-item', [], ['product', ['subexpr', 'readonly', [['get', 'product', ['loc', [null, [2, 24], [2, 31]]]]], [], ['loc', [null, [2, 14], [2, 32]]]], 'addToBasket', ['subexpr', 'action', [['get', 'addToBasket', ['loc', [null, [3, 26], [3, 37]]]]], [], ['loc', [null, [3, 18], [3, 38]]]]], ['loc', [null, [1, 0], [4, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    this.$('a.product--basket__btn').click();
  });
});
define('frontend/tests/integration/pods/components/product-list-item/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/product-list-item/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/product-list-item/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/product-nav/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('product-nav', 'Integration | Component | product nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'product-nav', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.product-nav').length);
  });

  (0, _emberQunit.test)('it should show', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'product-nav', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));

    var text = this.$('.product-nav').text();
    assert.ok(/новинкам/i.test(text), '- filter novelity');
    assert.ok(/цене/i.test(text), '- filter price');
    assert.ok(/популярности/i.test(text), '- filter bestseller');
    assert.ok(/В наличии/i.test(text), '- filter inStock');
  });

  (0, _emberQunit.test)('it should send action toggle inStock param', function (assert) {
    this.set('inStock', false);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 37
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-nav', [], ['inStock', ['subexpr', 'mut', [['get', 'inStock', ['loc', [null, [1, 27], [1, 34]]]]], [], ['loc', [null, [1, 22], [1, 35]]]]], ['loc', [null, [1, 0], [1, 37]]]]],
        locals: [],
        templates: []
      };
    })()));

    $(this.$('input[type=checkbox]')).click();
    assert.equal(this.get('inStock'), true, '- set to true on 1 click');

    $(this.$('input[type=checkbox]')).click();
    assert.equal(this.get('inStock'), false, '- set to false on 2 click');
  });
});
define('frontend/tests/integration/pods/components/product-nav/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/product-nav/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/product-nav/component-test.js should pass jshint.');
  });
});
define('frontend/tests/integration/pods/components/product-rating/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('product-rating', 'Integration | Component | product rating', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'product-rating', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.product-rating').length);
  });

  (0, _emberQunit.test)('it should set rating', function (assert) {
    var stub = 4;
    this.set('rating', stub);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 43
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-rating', [], ['rating', ['subexpr', 'readonly', [['get', 'rating', ['loc', [null, [1, 34], [1, 40]]]]], [], ['loc', [null, [1, 24], [1, 41]]]]], ['loc', [null, [1, 0], [1, 43]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$('.product-rating--stars__' + stub).length);
  });

  (0, _emberQunit.test)('it should set link to review', function (assert) {
    this.set('review', 'test review');
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 43
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'product-rating', [], ['review', ['subexpr', 'readonly', [['get', 'review', ['loc', [null, [1, 34], [1, 40]]]]], [], ['loc', [null, [1, 24], [1, 41]]]]], ['loc', [null, [1, 0], [1, 43]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), 'test review');
  });
});
define('frontend/tests/integration/pods/components/product-rating/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/product-rating/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/product-rating/component-test.js should pass jshint.');
  });
});
define('frontend/tests/models/notebook.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/notebook.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/notebook.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/app-input/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/app-input/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/app-input/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/app-pagination/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/app-pagination/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/app-pagination/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/filter-sort/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/filter-sort/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/filter-sort/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/filter-toggle-block/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/filter-toggle-block/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/filter-toggle-block/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/filter-toggle-memory/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/filter-toggle-memory/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/filter-toggle-memory/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/filter-toggle-price/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/filter-toggle-price/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/filter-toggle-price/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/filter-toggle-size/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/filter-toggle-size/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/filter-toggle-size/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/filter-toggle-ssd/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/filter-toggle-ssd/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/filter-toggle-ssd/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/filter-toggle-vendor/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/filter-toggle-vendor/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/filter-toggle-vendor/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/product-ballons/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/product-ballons/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/product-ballons/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/product-filter/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/product-filter/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/product-filter/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/product-list/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/product-list/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/product-list/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/product-list-item/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/product-list-item/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/product-list-item/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/product-nav/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/product-nav/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/product-nav/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/components/product-rating/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/product-rating/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/product-rating/component.js should pass jshint.');
  });
});
define('frontend/tests/pods/index/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/index/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/controller.js should pass jshint.');
  });
});
define('frontend/tests/pods/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/index/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/route.js should pass jshint.');
  });
});
define('frontend/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('frontend/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('frontend/tests/test-helper', ['exports', 'frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _frontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_frontendTestsHelpersResolver['default']);
});
define('frontend/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('frontend/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  var NAMESPACE = 'api';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

  (0, _emberQunit.test)('it should have namespace', function (assert) {
    var adapter = this.subject();
    assert.equal(adapter.get('namespace'), NAMESPACE, '- NAMESPACE');
  });
});
define('frontend/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('frontend/tests/unit/helpers/format-currency-test', ['exports', 'frontend/helpers/format-currency', 'qunit'], function (exports, _frontendHelpersFormatCurrency, _qunit) {

  (0, _qunit.module)('Unit | Helper | format currency');

  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _frontendHelpersFormatCurrency.formatCurrency)([1000]);
    assert.equal(result, '1 000');
  });

  (0, _qunit.test)('it should foram nuber like currency', function (assert) {
    var result = (0, _frontendHelpersFormatCurrency.formatCurrency)([1000000]);
    assert.equal(result, '1 000 000');
  });
});
define('frontend/tests/unit/helpers/format-currency-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/format-currency-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/format-currency-test.js should pass jshint.');
  });
});
define('frontend/tests/unit/helpers/is-equal-by-modul-test', ['exports', 'frontend/helpers/is-equal-by-modul', 'qunit'], function (exports, _frontendHelpersIsEqualByModul, _qunit) {

  (0, _qunit.module)('Unit | Helper | is equal by modul');

  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _frontendHelpersIsEqualByModul.isEqualByModul)([8, 4]);
    assert.ok(result);
  });

  (0, _qunit.test)('it should equal by modul', function (assert) {
    var result = (0, _frontendHelpersIsEqualByModul.isEqualByModul)([20, 5]);
    assert.equal(result, true);
  });

  (0, _qunit.test)('it shouldn\'t equal by modul', function (assert) {
    var result = (0, _frontendHelpersIsEqualByModul.isEqualByModul)([20, 6]);
    assert.equal(result, false);
  });
});
define('frontend/tests/unit/helpers/is-equal-by-modul-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/is-equal-by-modul-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/is-equal-by-modul-test.js should pass jshint.');
  });
});
define('frontend/tests/unit/models/notebook-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('notebook', 'Unit | Model | notebook', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    assert.ok(!!model);
  });
});
define('frontend/tests/unit/models/notebook-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/notebook-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/notebook-test.js should pass jshint.');
  });
});
define('frontend/tests/unit/pods/index/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  (0, _emberQunit.test)('it should set totalPages from meta', function (assert) {
    var controller = this.subject({ count: 10, meta: { total: 17 } });
    assert.equal(controller.get('totalPages'), 2, '- some pages');
  });

  (0, _emberQunit.test)('it should set totalPages is 1 from meta', function (assert) {
    var controller = this.subject({ count: 10, meta: { total: 0 } });
    assert.equal(controller.get('totalPages'), 1, '- one page if total is 0');
  });

  (0, _emberQunit.test)('it should show paginator', function (assert) {
    var controller = this.subject({ count: 10, meta: { total: 11 } });
    assert.equal(controller.get('isShowPagination'), true);
  });

  (0, _emberQunit.test)('it should hide paginator on empty models', function (assert) {
    var controller = this.subject({ count: 10, meta: { total: 0 } });
    assert.equal(controller.get('isShowPagination'), false);
  });

  (0, _emberQunit.test)('it should hide paginator', function (assert) {
    var controller = this.subject({ count: 10, meta: { total: 9 } });
    assert.equal(controller.get('isShowPagination'), false);
  });

  (0, _emberQunit.test)('it should set memoryList from meta', function (assert) {
    var meta = { memorys: ['test'] };
    var expect = [{ name: 'test', checked: false }];
    var controller = this.subject({ meta: meta });
    assert.deepEqual(controller.get('memoryList'), expect);
  });

  (0, _emberQunit.test)('it should set checked memoryList from meta is in queryParams', function (assert) {
    var memory = ['test 1'];
    var meta = { memorys: ['test 1', 'test 2'] };
    var expect = [{ name: 'test 1', checked: true }, { name: 'test 2', checked: false }];

    var controller = this.subject({ meta: meta, memory: memory });
    assert.deepEqual(controller.get('memoryList'), expect);
  });

  (0, _emberQunit.test)('it should set vendorList from meta', function (assert) {
    var meta = { vendors: [{ name: 'test', count: 10 }] };
    var expect = [{ name: 'test', count: 10, checked: false }];
    var controller = this.subject({ meta: meta });
    assert.deepEqual(controller.get('vendorList'), expect);
  });

  (0, _emberQunit.test)('it should set checked vendorList from meta is in queryParams', function (assert) {
    var vendor = ['test'];
    var meta = { vendors: [{ name: 'test', count: 10 }] };
    var expect = [{ name: 'test', count: 10, checked: true }];
    var controller = this.subject({ meta: meta, vendor: vendor });
    assert.deepEqual(controller.get('vendorList'), expect);
  });

  (0, _emberQunit.test)('it should add product to basket', function (assert) {
    var done = assert.async();
    var controller = this.subject();

    var cachedAlert = window.alert;
    var product = { model: 'test product' };

    window.alert = function (expect) {
      assert.equal(expect, 'Product "' + product.model + '" add to Your basket');
      done();
    };

    controller.send('addToBasket', product);

    window.alert = cachedAlert;
  });
});
define('frontend/tests/unit/pods/index/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/index/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/index/controller-test.js should pass jshint.');
  });
});
define('frontend/tests/unit/pods/index/route-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  (0, _emberQunit.test)('it should setup controller', function (assert) {
    var route = this.subject();
    var controller = _ember['default'].Object.create();
    var meta = { name: 'test meta' };
    var model = _ember['default'].Object.create({ meta: meta });

    route.setupController(controller, model);

    assert.deepEqual(controller.get('model'), model, '- set model');
    assert.deepEqual(controller.get('meta'), meta, '- set meta');
  });

  (0, _emberQunit.test)('it should refresh route on change query params', function (assert) {
    var done = assert.async();

    var refresh = function refresh() {
      assert.ok(true);
      done();
    };

    var route = this.subject({ refresh: refresh });
    route.send('queryParamsDidChange');
  });
});
define('frontend/tests/unit/pods/index/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/index/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/index/route-test.js should pass jshint.');
  });
});
define('frontend/tests/unit/utils/input-tel-test', ['exports', 'frontend/utils/input-tel', 'qunit'], function (exports, _frontendUtilsInputTel, _qunit) {

  (0, _qunit.module)('Unit | Utility | input tel', {
    beforeEach: function beforeEach() {
      var input = document.createElement('INPUT');
      input.type = 'tel';
      this.$input = $(input);
    },

    afterEach: function afterEach() {
      this.$input = null;
    }
  });

  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _frontendUtilsInputTel['default'])(this.$input);
    assert.ok(result);
  });

  (0, _qunit.test)('it should set number on key-press in input', function (assert) {
    var result = (0, _frontendUtilsInputTel.isNumberKeyCode)({ keyCode: '3'.charCodeAt() });
    assert.equal(result, true);
  });

  (0, _qunit.test)('it shouldn\'t set char on key-press in input', function (assert) {
    var result = (0, _frontendUtilsInputTel.isNumberKeyCode)({ keyCode: 'A'.charCodeAt() });
    assert.equal(result, false);
  });
});
/* global $ */
define('frontend/tests/unit/utils/input-tel-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/input-tel-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/input-tel-test.js should pass jshint.');
  });
});
define('frontend/tests/utils/input-tel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/input-tel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/input-tel.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map