import Ember from 'ember';

const DEFAULT_ITEMS_ON_PAGE = 8;

export default Ember.Controller.extend({
  queryParams: [
    { inStock: 'in-stock' },
    'page',
    'direction',
    'sort',
    'memory',
    'price',
    'size',
    'vendor',
    'ssd'
  ],

  page: 1,
  inStock: false,
  memory: [],
  price: [],
  vendor: [],
  size: [],
  ssd: false,
  count: DEFAULT_ITEMS_ON_PAGE,

  totalPages: Ember.computed('count', 'meta.total', function() {
    return Math.ceil(this.get('meta.total') / this.get('count')) || 1;
  }),

  isShowPagination: Ember.computed('totalPages', function() {
    return this.get('totalPages') > 1 ? true : false;
  }),

  memoryList: Ember.computed('meta.memorys', function() {
    return (this.get('meta.memorys') || []).map((name) => {
      var checked = this.get('memory').indexOf(name) !== -1;
      return { name, checked };
    });
  }),

  vendorList: Ember.computed('meta.vendors', function() {
    return (this.get('meta.vendors') || []).map(({name, count}) => {
      var checked = this.get('vendor').indexOf(name) !== -1;
      return { name, count, checked };
    });
  }),

  actions: {
    addToBasket(product) {
      alert(`Product "${product.model}" add to Your basket`);
    },
  }
});
