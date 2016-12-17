import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

/**
 * @see {@link Product.Notebook}
 */
export default Model.extend({
  brend: attr('string'),
  model: attr('string'),
  image: attr('string'),
  rating: attr('number'),
  price: attr('number'),
  priceSale: attr('number'),
  review: attr('number'),
  availability: attr('boolean'),
  novelty: attr('boolean'),
  bestseller: attr('boolean')
});
