const _ = require('lodash');

/**
 * @typedef Product.Notebook
 * @prop {Number} id
 * @prop {String} brend
 * @prop {String} model
 * @prop {Number} rating
 * @prop {Number} price
 * @prop {Number} review
 * @prop {Number} memory
 * @prop {String} image
 * @prop {Boolean} [availability=false]
 * @prop {Boolean} [novelty]
 * @prop {Boolean} [bestseller]
 */

/**
 * @typedef Product.Query
 * @prop {Number} page
 * @prop {Number} count
 * @prop {Number[]} memory
 * @prop {String[]} vendor
 * @prop {Boolean} availability
 * @prop {Boolean} ssd
 * @prop {} sort
 * @prop {'asc' | 'desc'} direction
 */

/**
 * @typedef Product.Meta
 * @prop {String[]} vendors
 * @prop {Number[]} memorys
 * @prop {Number} total
 */

const SALE = .13;

/**
 * @typedef {'page' | 'memory' | 'vendor' | 'availability' | 'ssd' | 'price' | 'size' | 'sort'} Product.Filter
 */

/**
 * @enum {Strings}
 */
const FILTERS = [
  'memory',
  'vendor',
  'ssd',
  'availability',
  'price',
  'size',
  'sort',
  'page',
  'count'
];
const NOTEBOOKS = get('notebooks', SALE);

exports.notebooks = {
  /** @param {Product.Query} query */
  get(query) {
    // TODO: need permit query
    const queryKeys = Object.keys(query);

    return FILTERS.filter(function(filter) {
      return queryKeys.indexOf(filter) !== -1;
    }).reduce(function(notebooks, filter) {
      return filteredNotebooks(notebooks, query, filter);
    }, NOTEBOOKS.slice());
  },

  /** @prop {Product.Meta[]} _meta */
  meta: _.memoize(() => getMeta(NOTEBOOKS.slice())),
};

/**********************************************
                    helpers
**********************************************/

/**
 * @param {string} model
 * @param {Number} sale
 */
function get(model, sale) {
  return normalize(require('./' + model), sale);
}

/**
 * @param {Product.Notebook[]} notebooks
 * @param {Number} sale
 * @return {Product.Notebook[]}
 */
function normalize(notebooks, sale) {
  return notebooks.map(function(notebook, index) {
    notebook.id = index;
    notebook.image = 'notebooks/' + notebook.brend.toLowerCase() + '.jpg';

    notebook.priceSale = _.ceil((1 - sale) * notebook.price, 0);
    return notebook;
  });
}

/**
 * @param {Product.Notebook[]} notebooks
 * @returns {Product.Meta[]}
 */
function getMeta(notebooks) {
  return {
    vendors: getVendors(notebooks),
    memorys: getMemorys(notebooks)
  };
}

/**
 * @param {Product.Notebook[]} notebooks
 */
function getVendors(notebooks) {
  const vendors = notebooks.reduce(function(summ, notebook) {
    summ[notebook.brend] = summ[notebook.brend] ? ++summ[notebook.brend] : 1;
    return summ;
  }, {});

  return Object.keys(vendors).sort().map(function(name) {
    return { name: name, count: vendors[name] };
  });
}

/**
 * @param {Product.Notebook[]} notebooks
 */
function getMemorys(notebooks) {
  const memorys = notebooks.map(function(notebook) {
    return notebook.memory;
  });

  return _.uniq(memorys).sort();
}

/**
 * @param {Product.Notebook[]} notebooks
 * @param {Product.Query} query
 * @param {Product.Filter} filter
 * @return {Product.Notebook[]}
 */
function filteredNotebooks(notebooks, query, filter) {
  switch (filter) {
    case 'page':
      const from_page = (query.page - 1) * query.count;
      const to_page = query.page * (query.count || notebooks.length);
      const total = notebooks.length;
      const current = (query.page > 0) && (query.page <= notebooks.length);

      notebooks = current ? notebooks.slice(from_page, to_page) : notebooks;
      notebooks.total = total;
      return notebooks;

    case 'memory':
      return notebooks.filter(function(notebook) {
        return query.memory.indexOf(notebook.memory.toString()) !== -1;
      });

    case 'vendor':
      return notebooks.filter(function(notebook) {
        return query.vendor.map(function(vendor) {
          return vendor.toLowerCase();
        }).indexOf(notebook.brend.toLowerCase()) !== -1;
      });

    case 'availability':
      return notebooks.filter(function(notebook) {
        const availability = (notebook.availability  || false).toString();
        return query.availability === 'true' ? notebook.availability === true : true;
      });

    case 'ssd':
      return notebooks.filter(function(notebook) {
        const ssd = (notebook.ssd || false).toString();
        return query.ssd === ssd;
      });

    case 'price':
      return notebooks; //TODO

    case 'size':
      return notebooks; //TODO

    case 'sort':
       const sort = _.sortBy(notebooks, function(notebook) {
        return notebook[query.sort];
      });
      return query.direction === 'desc' ? sort.reverse() : sort;

    default:
      return notebooks;
  }
}
