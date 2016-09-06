var _ = require('lodash');

var SALE = .13;
var FILTERS = [
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
var NOTEBOOKS = get('notebooks', SALE);

exports.notebooks = {
  get: function(query) {
    // TODO: need permit query
    var queryKeys = Object.keys(query);

    return FILTERS.filter(function(filter) {
      return queryKeys.indexOf(filter) !== -1;
    }).reduce(function(notebooks, filter) {
      return filteredNotebooks(notebooks, query, filter);
    }, NOTEBOOKS.slice());
  },

  meta: function() {
    if (this._meta) {
      return this._meta;
    }

    return this._meta = getMeta(NOTEBOOKS.slice());
  }
};

/**********************************************
                    helpers
**********************************************/

function get(model, sale) {
  return normalize(require('./' + model), sale);
}

function normalize(notebooks, sale) {
  return notebooks.map(function(notebook, index) {
    notebook.id = index;
    notebook.image = 'notebooks/' + notebook.brend.toLowerCase() + '.jpg';

    notebook.priceSale = _.ceil((1 - sale) * notebook.price, 0);
    return notebook;
  });
}

function getMeta(notebooks) {
  return {
    vendors: getVendors(notebooks),
    memorys: getMemorys(notebooks)
  };
}

function getVendors(notebooks) {
  var vendors = notebooks.map(function(notebook) {
    return notebook.brend;
  }).reduce(function(summ, brend) {
    summ[brend] = summ[brend] ? ++summ[brend] : 1;
    return summ;
  }, {});

  return Object.keys(vendors).sort().map(function(name) {
    return { name: name, count: vendors[name] };
  });
}

function getMemorys(notebooks) {
  var memorys = notebooks.map(function(notebook) {
    return notebook.memory;
  });

  return _.uniq(memorys).sort();
}

function filteredNotebooks(notebooks, query, filter) {
  switch (filter) {
    case 'page':
      var from_page = (query.page - 1) * query.count;
      var to_page = query.page * (query.count || notebooks.length);
      var total = notebooks.length;
      var current = (query.page > 0) && (query.page <= notebooks.length);

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
        var availability = (notebook.availability  || false).toString();
        return query.availability === 'true' ? notebook.availability === true : true;
      });

    case 'ssd':
      return notebooks.filter(function(notebook) {
        var ssd = (notebook.ssd || false).toString();
        return query.ssd === ssd;
      });

    case 'price':
      return notebooks; //TODO

    case 'size':
      return notebooks; //TODO

    case 'sort':
       var sort = _.sortBy(notebooks, function(notebook) {
        return notebook[query.sort];
      });
      return query.direction === 'desc' ? sort.reverse() : sort;

    default:
      return notebooks;
  }
}
