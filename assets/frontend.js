"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('frontend/adapters/application', ['exports', 'ember-data/adapters/rest'], function (exports, _emberDataAdaptersRest) {
  exports['default'] = _emberDataAdaptersRest['default'].extend({
    namespace: 'api'
  });
});
define('frontend/app', ['exports', 'ember', 'frontend/resolver', 'ember-load-initializers', 'frontend/config/environment'], function (exports, _ember, _frontendResolver, _emberLoadInitializers, _frontendConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _frontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _frontendConfigEnvironment['default'].podModulePrefix,
    Resolver: _frontendResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _frontendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('frontend/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'frontend/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _frontendConfigEnvironment) {

  var name = _frontendConfigEnvironment['default'].APP.name;
  var version = _frontendConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('frontend/helpers/format-currency', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.formatCurrency = formatCurrency;

  var PATTERN = /(\d)(?=(\d\d\d)+([^\d]|$))/g;

  function formatCurrency(_ref /*, hash*/) {
    var _ref2 = _slicedToArray(_ref, 1);

    var value = _ref2[0];

    if (value !== undefined) {
      value = value.toString().replace(PATTERN, '$1 ');
    }

    return value;
  }

  exports['default'] = _ember['default'].Helper.helper(formatCurrency);
});
define('frontend/helpers/is-eq', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.isEq = isEq;

  function isEq(_ref /*, hash*/) {
    var _ref2 = _slicedToArray(_ref, 2);

    var a = _ref2[0];
    var b = _ref2[1];

    if (a === undefined) {
      return false;
    }
    return a.toString() === b.toString();
  }

  exports['default'] = _ember['default'].Helper.helper(isEq);
});
define('frontend/helpers/is-equal-by-modul', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.isEqualByModul = isEqualByModul;

  function isEqualByModul(_ref /*, hash*/) {
    var _ref2 = _slicedToArray(_ref, 2);

    var index = _ref2[0];
    var count = _ref2[1];

    return index && index % count === 0;
  }

  exports['default'] = _ember['default'].Helper.helper(isEqualByModul);
});
define('frontend/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('frontend/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'frontend/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _frontendConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_frontendConfigEnvironment['default'].APP.name, _frontendConfigEnvironment['default'].APP.version)
  };
});
define('frontend/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('frontend/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('frontend/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('frontend/initializers/export-application-global', ['exports', 'ember', 'frontend/config/environment'], function (exports, _ember, _frontendConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_frontendConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _frontendConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_frontendConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('frontend/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('frontend/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('frontend/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("frontend/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('frontend/models/notebook', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _emberDataModel['default'].extend({
    brend: (0, _emberDataAttr['default'])('string'),
    model: (0, _emberDataAttr['default'])('string'),
    image: (0, _emberDataAttr['default'])('string'),
    rating: (0, _emberDataAttr['default'])('number'),
    price: (0, _emberDataAttr['default'])('number'),
    priceSale: (0, _emberDataAttr['default'])('number'),
    review: (0, _emberDataAttr['default'])('number'),
    availability: (0, _emberDataAttr['default'])('boolean'),
    novelty: (0, _emberDataAttr['default'])('boolean'),
    bestseller: (0, _emberDataAttr['default'])('boolean')
  });
});
define('frontend/pods/components/app-input/component', ['exports', 'ember'], function (exports, _ember) {

  var CLASS_NAME = 'app-input--helper';

  exports['default'] = _ember['default'].Component.extend({
    tagName: 'label',

    classNames: ['app-input'],

    init: function init() {
      var className = CLASS_NAME;

      if (this.get('modifer') !== undefined) {
        className += '__' + this.get('modifer');
      }

      this.set('className', className);
      return this._super.apply(this, arguments);
    }
  });
});
define("frontend/pods/components/app-input/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/app-input/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'class');
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["attribute", "class", ["get", "className", ["loc", [null, [2, 13], [2, 22]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('frontend/pods/components/app-pagination/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'nav',
    classNames: ['pagination'],

    pages: _ember['default'].computed('total', function () {
      var pages = [];
      for (var index = 1; index <= this.get('total'); index++) {
        pages.push({ index: index });
      }

      return pages;
    })
  });
});
define("frontend/pods/components/app-pagination/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "frontend/pods/components/app-pagination/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "page.index", ["loc", [null, [3, 4], [3, 18]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/app-pagination/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
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
        statements: [["block", "link-to", [["get", "mainPath", ["loc", [null, [2, 13], [2, 21]]]], ["subexpr", "query-params", [], ["page", ["get", "page.index", ["loc", [null, [2, 41], [2, 51]]]]], ["loc", [null, [2, 22], [2, 52]]]]], ["class", "pagination--link"], 0, null, ["loc", [null, [2, 2], [4, 14]]]]],
        locals: ["page"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/app-pagination/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "each", [["get", "pages", ["loc", [null, [1, 8], [1, 13]]]]], [], 0, null, ["loc", [null, [1, 0], [5, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend/pods/components/filter-sort/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNameBindings: ['asc:sort-up', 'desc:sort-down'],

    didReceiveAttrs: function didReceiveAttrs(_ref) {
      var newAttrs = _ref.newAttrs;

      if (newAttrs.sortName.value !== newAttrs.name) {
        this.set('asc', false);
        this.set('desc', false);
      } else {
        this.set('asc', newAttrs.direction.value === 'asc');
        this.set('desc', newAttrs.direction.value === 'desc');
      }
    },

    click: function click() {
      var direction = this.get('direction') === 'desc' ? 'asc' : 'desc';

      this.attrs.direction.update(direction);
      this.attrs.sortName.update(this.get('name'));
    }
  });
});
define("frontend/pods/components/filter-sort/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/filter-sort/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "text", ["loc", [null, [2, 2], [2, 10]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/filter-sort/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "link-to", [["subexpr", "query-params", [], ["direction", ["get", "direction", ["loc", [null, [1, 35], [1, 44]]]], "sort", ["get", "name", ["loc", [null, [1, 50], [1, 54]]]]], ["loc", [null, [1, 11], [1, 56]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 12]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend/pods/components/filter-toggle-block/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',

    actions: {
      toggle: function toggle() {
        this.toggleProperty('isOpen');
      }
    }
  });
});
define("frontend/pods/components/filter-toggle-block/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/filter-toggle-block/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "filter_toggle-block--btn");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "filter_toggle-block--title");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
        morphs[3] = dom.createAttrMorph(element1, 'class');
        morphs[4] = dom.createMorphAt(element1, 1, 1);
        return morphs;
      },
      statements: [["attribute", "class", ["subexpr", "if", [["get", "isOpen", ["loc", [null, [1, 39], [1, 45]]]], "open", "close"], [], ["loc", [null, [1, 34], [1, 62]]]]], ["element", "action", ["toggle"], [], ["loc", [null, [1, 8], [1, 27]]]], ["content", "title", ["loc", [null, [3, 42], [3, 51]]]], ["attribute", "class", ["concat", ["filter_toggle-block--content ", ["subexpr", "unless", [["get", "isOpen", ["loc", [null, [6, 50], [6, 56]]]], "hide"], [], ["loc", [null, [6, 41], [6, 65]]]]]]], ["content", "yield", ["loc", [null, [7, 2], [7, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('frontend/pods/components/filter-toggle-memory/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',

    init: function init() {
      _ember['default'].run.once('didReceiveAttrs', this._setOpenParam.bind(this));
      this._super.apply(this, arguments);
    },

    actions: {
      checked: function checked(index) {
        this.toggleProperty('model.' + index + '.checked');

        var model = this.get('model').filter(function (_ref) {
          var checked = _ref.checked;
          return checked;
        }).map(function (_ref2) {
          var name = _ref2.name;
          return name;
        });

        this.sendAction('setModel', model);
      }
    },

    _setOpenParam: function _setOpenParam() {
      var isOpen = this.get('model').find(function (_ref3) {
        var checked = _ref3.checked;
        return checked;
      });
      this.set('isOpen', !!isOpen);
    }
  });
});
define("frontend/pods/components/filter-toggle-memory/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 8
                },
                "end": {
                  "line": 14,
                  "column": 8
                }
              },
              "moduleName": "frontend/pods/components/filter-toggle-memory/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("input");
              dom.setAttribute(el1, "type", "checkbox");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              if (this.cachedFragment) {
                dom.repairClonedNode(element0, [], true);
              }
              var morphs = new Array(3);
              morphs[0] = dom.createAttrMorph(element0, 'checked');
              morphs[1] = dom.createAttrMorph(element0, 'onclick');
              morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
              return morphs;
            },
            statements: [["attribute", "checked", ["get", "item.checked", ["loc", [null, [11, 22], [11, 34]]]]], ["attribute", "onclick", ["subexpr", "action", ["checked", ["get", "index", ["loc", [null, [12, 39], [12, 44]]]]], [], ["loc", [null, [12, 20], [12, 47]]]]], ["content", "item.name", ["loc", [null, [13, 16], [13, 29]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 16,
                "column": 4
              }
            },
            "moduleName": "frontend/pods/components/filter-toggle-memory/template.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "app-input", [], [], 0, null, ["loc", [null, [9, 8], [14, 22]]]]],
          locals: ["item", "index"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/filter-toggle-memory/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "product-filter--list__2");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model", ["loc", [null, [7, 12], [7, 17]]]]], [], 0, null, ["loc", [null, [7, 4], [16, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/filter-toggle-memory/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "filter-toggle-block", [], ["title", "Размер оперативной памяти", "name", "memory", "isOpen", ["subexpr", "mut", [["get", "isOpen", ["loc", [null, [4, 16], [4, 22]]]]], [], ["loc", [null, [4, 11], [4, 23]]]]], 0, null, ["loc", [null, [1, 0], [18, 24]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend/pods/components/filter-toggle-price/component', ['exports', 'ember', 'frontend/utils/input-tel'], function (exports, _ember, _frontendUtilsInputTel) {
  exports['default'] = _ember['default'].Component.extend({
    init: function init() {
      _ember['default'].run.once('didReceiveAttrs', this._setOpenParam.bind(this));
      this._super.apply(this, arguments);
    },

    didInsertElement: function didInsertElement() {
      (0, _frontendUtilsInputTel['default'])(this.$('input[type=tel]'));
    },

    from: _ember['default'].computed.alias('model[0]'),

    to: _ember['default'].computed.alias('model[1]'),

    _setOpenParam: function _setOpenParam() {
      this.set('isOpen', this.get('model.length'));
    }
  });
});
define("frontend/pods/components/filter-toggle-price/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/filter-toggle-price/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "product-filter--input");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("input");
          dom.setAttribute(el2, "type", "tel");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    —\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("input");
          dom.setAttribute(el2, "type", "tel");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [2]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'value');
          morphs[1] = dom.createAttrMorph(element2, 'value');
          return morphs;
        },
        statements: [["attribute", "value", ["get", "from", ["loc", [null, [14, 30], [14, 34]]]]], ["attribute", "value", ["get", "to", ["loc", [null, [16, 31], [16, 33]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/filter-toggle-price/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "filter-toggle-block", [], ["title", "Цена, руб.", "name", "price", "isOpen", ["subexpr", "readonly", [["get", "isOpen", ["loc", [null, [4, 21], [4, 27]]]]], [], ["loc", [null, [4, 11], [4, 28]]]]], 0, null, ["loc", [null, [1, 0], [18, 24]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend/pods/components/filter-toggle-size/component', ['exports', 'ember', 'frontend/utils/input-tel'], function (exports, _ember, _frontendUtilsInputTel) {
  exports['default'] = _ember['default'].Component.extend({
    init: function init() {
      _ember['default'].run.once('didReceiveAttrs', this._setOpenParam.bind(this));
      this._super.apply(this, arguments);
    },

    didInsertElement: function didInsertElement() {
      (0, _frontendUtilsInputTel['default'])(this.$('input[type=tel]'));
    },

    from: _ember['default'].computed.alias('model[0]'),

    to: _ember['default'].computed.alias('model[1]'),

    _setOpenParam: function _setOpenParam() {
      this.set('isOpen', this.get('model.length'));
    }
  });
});
define("frontend/pods/components/filter-toggle-size/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/filter-toggle-size/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "product-filter--input");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("input");
          dom.setAttribute(el2, "type", "tel");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    —\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("input");
          dom.setAttribute(el2, "type", "tel");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [2]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'value');
          morphs[1] = dom.createAttrMorph(element2, 'value');
          return morphs;
        },
        statements: [["attribute", "value", ["get", "from", ["loc", [null, [14, 30], [14, 34]]]]], ["attribute", "value", ["get", "to", ["loc", [null, [16, 30], [16, 32]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/filter-toggle-size/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "filter-toggle-block", [], ["title", "Диагональ экрана, дюймы", "name", "diag", "isOpen", ["subexpr", "readonly", [["get", "isOpen", ["loc", [null, [4, 21], [4, 27]]]]], [], ["loc", [null, [4, 11], [4, 28]]]]], 0, null, ["loc", [null, [1, 0], [18, 24]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend/pods/components/filter-toggle-ssd/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    init: function init() {
      _ember['default'].run.once('didReceiveAttrs', this._setOpenParam.bind(this));
      return this._super.apply(this, arguments);
    },

    actions: {
      setModel: function setModel(value) {
        this.attrs.model.update(value);
      }
    },

    _setOpenParam: function _setOpenParam() {
      this.set('isOpen', this.get('model') === undefined ? false : true);
    }
  });
});
define("frontend/pods/components/filter-toggle-ssd/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 6
              },
              "end": {
                "line": 13,
                "column": 6
              }
            },
            "moduleName": "frontend/pods/components/filter-toggle-ssd/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "radio");
            dom.setAttribute(el1, "name", "true");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Есть");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            if (this.cachedFragment) {
              dom.repairClonedNode(element1, [], true);
            }
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element1, 'checked');
            morphs[1] = dom.createAttrMorph(element1, 'onclick');
            return morphs;
          },
          statements: [["attribute", "checked", ["subexpr", "if", [["subexpr", "is-eq", [["get", "model", ["loc", [null, [10, 30], [10, 35]]]], true], [], ["loc", [null, [10, 23], [10, 41]]]], "checked"], [], ["loc", [null, [10, 18], [10, 53]]]]], ["attribute", "onclick", ["subexpr", "action", ["setModel", true], [], ["loc", [null, [11, 18], [11, 45]]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 6
              },
              "end": {
                "line": 22,
                "column": 6
              }
            },
            "moduleName": "frontend/pods/components/filter-toggle-ssd/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "radio");
            dom.setAttribute(el1, "name", "false");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Нет");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            if (this.cachedFragment) {
              dom.repairClonedNode(element0, [], true);
            }
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'checked');
            morphs[1] = dom.createAttrMorph(element0, 'onclick');
            return morphs;
          },
          statements: [["attribute", "checked", ["subexpr", "if", [["subexpr", "is-eq", [["get", "model", ["loc", [null, [19, 30], [19, 35]]]], false], [], ["loc", [null, [19, 23], [19, 42]]]], "checked"], [], ["loc", [null, [19, 18], [19, 54]]]]], ["attribute", "onclick", ["subexpr", "action", ["setModel", false], [], ["loc", [null, [20, 18], [20, 46]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/filter-toggle-ssd/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "product-filter--list__2");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "app-input", [], ["modifer", "circle"], 0, null, ["loc", [null, [8, 6], [13, 20]]]], ["block", "app-input", [], ["modifer", "circle"], 1, null, ["loc", [null, [17, 6], [22, 20]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/filter-toggle-ssd/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "filter-toggle-block", [], ["title", "Наличие SSD", "name", "ssd", "isOpen", ["subexpr", "readonly", [["get", "isOpen", ["loc", [null, [4, 21], [4, 27]]]]], [], ["loc", [null, [4, 11], [4, 28]]]]], 0, null, ["loc", [null, [1, 0], [25, 24]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend/pods/components/filter-toggle-vendor/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',

    init: function init() {
      _ember['default'].run.once('didReceiveAttrs', this._setOpenParam.bind(this));
      this._super.apply(this, arguments);
    },

    actions: {
      checked: function checked(index) {
        this.toggleProperty('model.' + index + '.checked');

        var model = this.get('model').filter(function (vendor) {
          return vendor.checked;
        }).map(function (vendor) {
          return vendor.name;
        });
        this.sendAction('setModel', model);
      }
    },

    _setOpenParam: function _setOpenParam() {
      var isOpen = this.get('model').find(function (_ref) {
        var checked = _ref.checked;
        return checked;
      });
      this.set('isOpen', isOpen);
    }
  });
});
define("frontend/pods/components/filter-toggle-vendor/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 8
                },
                "end": {
                  "line": 14,
                  "column": 8
                }
              },
              "moduleName": "frontend/pods/components/filter-toggle-vendor/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("input");
              dom.setAttribute(el1, "type", "checkbox");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("(");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(")");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              if (this.cachedFragment) {
                dom.repairClonedNode(element0, [], true);
              }
              var element1 = dom.childAt(fragment, [3]);
              var morphs = new Array(4);
              morphs[0] = dom.createAttrMorph(element0, 'checked');
              morphs[1] = dom.createAttrMorph(element0, 'onclick');
              morphs[2] = dom.createMorphAt(element1, 0, 0);
              morphs[3] = dom.createMorphAt(element1, 2, 2);
              return morphs;
            },
            statements: [["attribute", "checked", ["get", "item.checked", ["loc", [null, [11, 22], [11, 34]]]]], ["attribute", "onclick", ["subexpr", "action", ["checked", ["get", "index", ["loc", [null, [12, 39], [12, 44]]]]], [], ["loc", [null, [12, 20], [12, 47]]]]], ["content", "item.name", ["loc", [null, [13, 16], [13, 29]]]], ["content", "item.count", ["loc", [null, [13, 30], [13, 44]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 16,
                "column": 6
              }
            },
            "moduleName": "frontend/pods/components/filter-toggle-vendor/template.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "app-input", [], [], 0, null, ["loc", [null, [9, 8], [14, 22]]]]],
          locals: ["item", "index"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/filter-toggle-vendor/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "product-filter--list");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model", ["loc", [null, [7, 12], [7, 17]]]]], [], 0, null, ["loc", [null, [7, 4], [16, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/filter-toggle-vendor/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "filter-toggle-block", [], ["title", "Производитель", "name", "vendor", "isOpen", ["subexpr", "readonly", [["get", "isOpen", ["loc", [null, [4, 21], [4, 27]]]]], [], ["loc", [null, [4, 11], [4, 28]]]]], 0, null, ["loc", [null, [1, 0], [18, 24]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend/pods/components/product-ballons/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'header',
    classNames: ['product-ballon-list']
  });
});
define("frontend/pods/components/product-ballons/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/product-ballons/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "product-ballon--novelty");
          var el2 = dom.createTextNode("НОВИНКА");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/product-ballons/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "product-ballon--bestseller");
          var el2 = dom.createTextNode("ХИТ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/product-ballons/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "isNovelty", ["loc", [null, [1, 6], [1, 15]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "isBestseller", ["loc", [null, [4, 6], [4, 18]]]]], [], 1, null, ["loc", [null, [4, 0], [6, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('frontend/pods/components/product-filter/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['product-filter']
  });
});
define("frontend/pods/components/product-filter/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 43,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/product-filter/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "product-filter--block");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "product-filter--block");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "product-filter--block");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "product-filter--block");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "product-filter--block");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "product-filter--btn");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "product--basket__btn extend");
        var el3 = dom.createTextNode("\n    Сбросить\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [10, 1]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [6]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [8]), 1, 1);
        morphs[5] = dom.createAttrMorph(element0, 'onclick');
        return morphs;
      },
      statements: [["inline", "filter-toggle-vendor", [], ["model", ["subexpr", "readonly", [["get", "vendorList", ["loc", [null, [4, 22], [4, 32]]]]], [], ["loc", [null, [4, 12], [4, 33]]]], "setModel", ["subexpr", "action", [["get", "setVendor", ["loc", [null, [5, 23], [5, 32]]]]], [], ["loc", [null, [5, 15], [5, 33]]]]], ["loc", [null, [3, 2], [6, 4]]]], ["inline", "filter-toggle-price", [], ["model", ["subexpr", "mut", [["get", "price", ["loc", [null, [11, 35], [11, 40]]]]], [], ["loc", [null, [11, 30], [11, 41]]]]], ["loc", [null, [11, 2], [11, 43]]]], ["inline", "filter-toggle-size", [], ["model", ["subexpr", "mut", [["get", "size", ["loc", [null, [16, 34], [16, 38]]]]], [], ["loc", [null, [16, 29], [16, 39]]]]], ["loc", [null, [16, 2], [16, 41]]]], ["inline", "filter-toggle-memory", [], ["model", ["subexpr", "readonly", [["get", "memoryList", ["loc", [null, [22, 22], [22, 32]]]]], [], ["loc", [null, [22, 12], [22, 33]]]], "setModel", ["subexpr", "action", [["get", "setMemory", ["loc", [null, [23, 23], [23, 32]]]]], [], ["loc", [null, [23, 15], [23, 33]]]]], ["loc", [null, [21, 2], [24, 4]]]], ["inline", "filter-toggle-ssd", [], ["model", ["subexpr", "mut", [["get", "ssd", ["loc", [null, [30, 17], [30, 20]]]]], [], ["loc", [null, [30, 12], [30, 21]]]]], ["loc", [null, [29, 2], [31, 4]]]], ["attribute", "onclick", ["subexpr", "action", [["get", "reset", ["loc", [null, [38, 21], [38, 26]]]]], [], ["loc", [null, [38, 12], [38, 28]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('frontend/pods/components/product-list/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'ul',
    classNames: ['product-list']
  });
});
define("frontend/pods/components/product-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "frontend/pods/components/product-list/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "product__line");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
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
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/product-list/template.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "is-equal-by-modul", [["get", "index", ["loc", [null, [2, 27], [2, 32]]]], 4], [], ["loc", [null, [2, 8], [2, 35]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 9]]]], ["inline", "product-list-item", [], ["product", ["subexpr", "readonly", [["get", "product", ["loc", [null, [7, 24], [7, 31]]]]], [], ["loc", [null, [7, 14], [7, 32]]]], "addToBasket", ["subexpr", "action", [["get", "addToBasket", ["loc", [null, [8, 26], [8, 37]]]]], [], ["loc", [null, [8, 18], [8, 38]]]]], ["loc", [null, [6, 2], [9, 4]]]]],
        locals: ["product", "index"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "frontend/pods/components/product-list/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("h2");
          var el3 = dom.createTextNode("По вашему запросу ничего не найдено");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/product-list/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "each", [["get", "model", ["loc", [null, [1, 8], [1, 13]]]]], [], 0, 1, ["loc", [null, [1, 0], [12, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('frontend/pods/components/product-list-item/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    classNames: 'product__4x'
  });
});
define("frontend/pods/components/product-list-item/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 2
            },
            "end": {
              "line": 32,
              "column": 2
            }
          },
          "moduleName": "frontend/pods/components/product-list-item/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "product--availability__check");
          var el2 = dom.createTextNode("В наличии");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 2
            },
            "end": {
              "line": 34,
              "column": 2
            }
          },
          "moduleName": "frontend/pods/components/product-list-item/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "product--availability__close");
          var el2 = dom.createTextNode("Под заказ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/product-list-item/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "class", "product--image");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "#");
        dom.setAttribute(el1, "class", "product--title__link");
        var el2 = dom.createTextNode("\n  Ноутбук ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "product--price");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "product--price__old");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" р.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "product--price__new");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" р.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "#");
        dom.setAttribute(el1, "class", "product--basket__btn");
        var el2 = dom.createTextNode("\n  В корзину\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "class", "product--footer");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "class", "product--input__plus");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "type", "checkbox");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        var el4 = dom.createTextNode("Сравнить");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(fragment, [4]);
        var element2 = dom.childAt(fragment, [8]);
        var element3 = dom.childAt(fragment, [10]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'src');
        morphs[2] = dom.createAttrMorph(element0, 'alt');
        morphs[3] = dom.createMorphAt(element1, 1, 1);
        morphs[4] = dom.createMorphAt(element1, 3, 3);
        morphs[5] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[6] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[7] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        morphs[8] = dom.createElementMorph(element3);
        morphs[9] = dom.createMorphAt(dom.childAt(fragment, [12]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "product-ballons", [], ["isNovelty", ["subexpr", "readonly", [["get", "novelty", ["loc", [null, [2, 24], [2, 31]]]]], [], ["loc", [null, [2, 14], [2, 32]]]], "isBestseller", ["subexpr", "readonly", [["get", "bestseller", ["loc", [null, [3, 27], [3, 37]]]]], [], ["loc", [null, [3, 17], [3, 38]]]]], ["loc", [null, [1, 0], [4, 2]]]], ["attribute", "src", ["concat", ["assets/images/", ["get", "product.image", ["loc", [null, [7, 23], [7, 36]]]]]]], ["attribute", "alt", ["concat", [["get", "product.brend", ["loc", [null, [8, 9], [8, 22]]]], " ", ["get", "product.model", ["loc", [null, [8, 27], [8, 40]]]]]]], ["content", "product.brend", ["loc", [null, [12, 10], [12, 27]]]], ["content", "product.model", ["loc", [null, [12, 28], [12, 45]]]], ["inline", "product-rating", [], ["id", ["subexpr", "readonly", [["get", "product.id", ["loc", [null, [16, 21], [16, 31]]]]], [], ["loc", [null, [16, 11], [16, 32]]]], "rating", ["subexpr", "readonly", [["get", "product.rating", ["loc", [null, [17, 21], [17, 35]]]]], [], ["loc", [null, [17, 11], [17, 36]]]], "review", ["subexpr", "readonly", [["get", "product.review", ["loc", [null, [18, 21], [18, 35]]]]], [], ["loc", [null, [18, 11], [18, 36]]]]], ["loc", [null, [15, 0], [19, 2]]]], ["inline", "format-currency", [["get", "product.price", ["loc", [null, [22, 53], [22, 66]]]]], [], ["loc", [null, [22, 35], [22, 68]]]], ["inline", "format-currency", [["get", "product.priceSale", ["loc", [null, [23, 53], [23, 70]]]]], [], ["loc", [null, [23, 35], [23, 72]]]], ["element", "action", [["get", "addToBasket", ["loc", [null, [25, 50], [25, 61]]]], ["get", "product", ["loc", [null, [25, 62], [25, 69]]]]], [], ["loc", [null, [25, 41], [25, 71]]]], ["block", "if", [["get", "product.availability", ["loc", [null, [30, 8], [30, 28]]]]], [], 0, 1, ["loc", [null, [30, 2], [34, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('frontend/pods/components/product-nav/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['product-nav'],

    actions: {
      toggleAvailability: function toggleAvailability() {
        this.toggleProperty('availability');
      }
    }
  });
});
define("frontend/pods/components/product-nav/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 2
            },
            "end": {
              "line": 37,
              "column": 2
            }
          },
          "moduleName": "frontend/pods/components/product-nav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("input");
          dom.setAttribute(el1, "type", "checkbox");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          var el2 = dom.createTextNode("В наличии");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          if (this.cachedFragment) {
            dom.repairClonedNode(element0, [], true);
          }
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'checked');
          morphs[1] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["attribute", "checked", ["get", "availability", ["loc", [null, [34, 16], [34, 28]]]]], ["element", "action", ["toggleAvailability"], ["preventDefault", false], ["loc", [null, [35, 6], [35, 58]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/product-nav/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "product-nav--block__title");
        var el2 = dom.createTextNode("Ноутбуки");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "product-nav--block");
        var el2 = dom.createTextNode("Сортировать по:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "product-nav--block");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "product-nav--block");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "product-nav--block");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "product-nav--block");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "product-nav--block");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "#");
        dom.setAttribute(el2, "class", "product-nav--sort-plitka");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "product-nav--block");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "#");
        dom.setAttribute(el2, "class", "product-nav--sort-list");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [6]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [8]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [10]), 1, 1);
        return morphs;
      },
      statements: [["inline", "filter-sort", [], ["text", "новинкам", "name", "novelty", "direction", ["subexpr", "mut", [["get", "direction", ["loc", [null, [8, 21], [8, 30]]]]], [], ["loc", [null, [8, 16], [8, 31]]]], "sortName", ["subexpr", "mut", [["get", "sort", ["loc", [null, [9, 20], [9, 24]]]]], [], ["loc", [null, [9, 15], [9, 25]]]]], ["loc", [null, [5, 2], [10, 4]]]], ["inline", "filter-sort", [], ["text", "цене", "name", "price", "direction", ["subexpr", "mut", [["get", "direction", ["loc", [null, [17, 21], [17, 30]]]]], [], ["loc", [null, [17, 16], [17, 31]]]], "sortName", ["subexpr", "mut", [["get", "sort", ["loc", [null, [18, 20], [18, 24]]]]], [], ["loc", [null, [18, 15], [18, 25]]]]], ["loc", [null, [14, 2], [19, 4]]]], ["inline", "filter-sort", [], ["text", "популярности", "name", "bestseller", "direction", ["subexpr", "mut", [["get", "direction", ["loc", [null, [26, 21], [26, 30]]]]], [], ["loc", [null, [26, 16], [26, 31]]]], "sortName", ["subexpr", "mut", [["get", "sort", ["loc", [null, [27, 20], [27, 24]]]]], [], ["loc", [null, [27, 15], [27, 25]]]]], ["loc", [null, [23, 2], [28, 4]]]], ["block", "app-input", [], ["modifer", "small"], 0, null, ["loc", [null, [32, 2], [37, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend/pods/components/product-rating/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['product-rating']
  });
});
define("frontend/pods/components/product-rating/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "frontend/pods/components/product-rating/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    Всего ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" отзыва\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "review", ["loc", [null, [6, 10], [6, 20]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 9,
              "column": 2
            }
          },
          "moduleName": "frontend/pods/components/product-rating/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    Оставить отзыв\n");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/components/product-rating/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "product-rating--link");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element1, 'href');
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["product-rating--stars__", ["get", "rating", ["loc", [null, [1, 37], [1, 43]]]]]]], ["attribute", "href", ["concat", [["get", "id", ["loc", [null, [4, 11], [4, 13]]]], "/review"]]], ["block", "if", [["get", "review", ["loc", [null, [5, 8], [5, 14]]]]], [], 0, 1, ["loc", [null, [5, 2], [9, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('frontend/pods/index/controller', ['exports', 'ember'], function (exports, _ember) {

  var DEFAULT_ITEMS_ON_PAGE = 8;

  exports['default'] = _ember['default'].Controller.extend({
    queryParams: ['availability', 'count', 'page', 'direction', 'sort', 'memory', 'price', 'size', 'vendor', 'ssd'],

    page: 1,
    availability: false,
    memory: [],
    price: [],
    vendor: [],
    size: [],
    count: DEFAULT_ITEMS_ON_PAGE,

    totalPages: _ember['default'].computed('count', 'meta.total', function () {
      return Math.ceil(this.get('meta.total') / this.get('count')) || 1;
    }),

    isShowPagination: _ember['default'].computed('totalPages', function () {
      return this.get('totalPages') > 1 ? true : false;
    }),

    memoryList: _ember['default'].computed('meta.memorys', function () {
      var _this = this;

      return (this.get('meta.memorys') || []).map(function (name) {
        var checked = _this.get('memory').indexOf(name) !== -1;
        return { name: name, checked: checked };
      });
    }),

    vendorList: _ember['default'].computed('meta.vendors', function () {
      var _this2 = this;

      return (this.get('meta.vendors') || []).map(function (_ref) {
        var name = _ref.name;
        var count = _ref.count;

        var checked = _this2.get('vendor').indexOf(name) !== -1;
        return { name: name, count: count, checked: checked };
      });
    }),

    actions: {
      addToBasket: function addToBasket(product) {
        alert('Product "' + product.get('brend') + ' ' + product.get('model') + '" add to Your basket');
      },

      resetFilter: function resetFilter() {
        var _this3 = this;

        var defaultQueryParams = {
          count: DEFAULT_ITEMS_ON_PAGE,
          page: 1,
          availability: false,
          memory: [],
          price: [],
          vendor: [],
          size: [],
          direction: undefined,
          sort: undefined,
          ssd: undefined
        };

        Object.keys(defaultQueryParams).forEach(function (param) {
          _this3.set(param, defaultQueryParams[param]);
        });
      }
    }
  });
});
define('frontend/pods/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.query('notebook', params);
    },

    setupController: function setupController(controller, model) {
      controller.set('model', model);
      controller.set('meta', model.get('meta'));
    },

    serializeQueryParam: function serializeQueryParam(value, urlKey, defaultValueType) {
      if (defaultValueType === 'array') {
        return JSON.stringify(value).replace(/"/g, '');
      }

      return this._super.apply(this, arguments);
    },

    deserializeQueryParam: function deserializeQueryParam(value, urlKey, defaultValueType) {
      if (defaultValueType === 'array') {
        return value.replace(/(\[|\])/g, '').split(',');
      }

      return this._super.apply(this, arguments);
    },

    actions: {
      queryParamsDidChange: function queryParamsDidChange() /*changed, totalPresent, removed*/{
        this.refresh();
      }
    }
  });
});
define("frontend/pods/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 4
            },
            "end": {
              "line": 33,
              "column": 4
            }
          },
          "moduleName": "frontend/pods/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "app-pagination", [], ["total", ["subexpr", "readonly", [["get", "totalPages", ["loc", [null, [30, 29], [30, 39]]]]], [], ["loc", [null, [30, 19], [30, 40]]]], "mainPath", "index"], ["loc", [null, [29, 6], [32, 8]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "frontend/pods/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "grid--container");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("aside");
        dom.setAttribute(el2, "class", "grid--aside");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "id", "content");
        dom.setAttribute(el2, "class", "grid--content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [5]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["inline", "product-nav", [], ["sort", ["subexpr", "mut", [["get", "sort", ["loc", [null, [4, 16], [4, 20]]]]], [], ["loc", [null, [4, 11], [4, 21]]]], "direction", ["subexpr", "mut", [["get", "direction", ["loc", [null, [5, 21], [5, 30]]]]], [], ["loc", [null, [5, 16], [5, 31]]]], "availability", ["subexpr", "mut", [["get", "availability", ["loc", [null, [6, 24], [6, 36]]]]], [], ["loc", [null, [6, 19], [6, 37]]]]], ["loc", [null, [3, 2], [7, 4]]]], ["inline", "product-filter", [], ["ssd", ["subexpr", "mut", [["get", "ssd", ["loc", [null, [11, 17], [11, 20]]]]], [], ["loc", [null, [11, 12], [11, 21]]]], "price", ["subexpr", "mut", [["get", "price", ["loc", [null, [12, 19], [12, 24]]]]], [], ["loc", [null, [12, 14], [12, 25]]]], "size", ["subexpr", "mut", [["get", "size", ["loc", [null, [13, 18], [13, 22]]]]], [], ["loc", [null, [13, 13], [13, 23]]]], "setMemory", ["subexpr", "action", [["subexpr", "mut", [["get", "memory", ["loc", [null, [14, 31], [14, 37]]]]], [], ["loc", [null, [14, 26], [14, 38]]]]], [], ["loc", [null, [14, 18], [14, 39]]]], "memoryList", ["subexpr", "readonly", [["get", "memoryList", ["loc", [null, [15, 29], [15, 39]]]]], [], ["loc", [null, [15, 19], [15, 40]]]], "setVendor", ["subexpr", "action", [["subexpr", "mut", [["get", "vendor", ["loc", [null, [16, 31], [16, 37]]]]], [], ["loc", [null, [16, 26], [16, 38]]]]], [], ["loc", [null, [16, 18], [16, 39]]]], "vendorList", ["subexpr", "readonly", [["get", "vendorList", ["loc", [null, [17, 29], [17, 39]]]]], [], ["loc", [null, [17, 19], [17, 40]]]], "reset", ["subexpr", "action", ["resetFilter"], [], ["loc", [null, [18, 14], [18, 36]]]]], ["loc", [null, [10, 4], [19, 6]]]], ["inline", "product-list", [], ["model", ["subexpr", "readonly", [["get", "model", ["loc", [null, [24, 24], [24, 29]]]]], [], ["loc", [null, [24, 14], [24, 30]]]], "addToBasket", ["subexpr", "action", ["addToBasket"], [], ["loc", [null, [25, 20], [25, 42]]]]], ["loc", [null, [23, 4], [26, 6]]]], ["block", "if", [["get", "isShowPagination", ["loc", [null, [28, 10], [28, 26]]]]], [], 0, null, ["loc", [null, [28, 4], [33, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('frontend/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, _ember, _frontendConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _frontendConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('frontend/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("frontend/utils/input-tel", ["exports"], function (exports) {
  exports["default"] = inputTel;
  exports.isNumberKeyCode = isNumberKeyCode;
  /**
   * Only number may be press
   * @param  {<INPUT>} $input
   */

  function inputTel($input) {
    return $input.keypress(isNumberKeyCode);
  }

  function isNumberKeyCode(_ref) {
    var keyCode = _ref.keyCode;

    var isNumber = keyCode >= 48 && keyCode <= 57; // 0-9
    var isKeyPad = keyCode >= 96 && keyCode <= 105;
    return isNumber || isKeyPad ? true : false;
  }
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'frontend';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("frontend/app")["default"].create({"name":"frontend","version":"0.0.1+d6c324b7"});
}

/* jshint ignore:end */
//# sourceMappingURL=frontend.map