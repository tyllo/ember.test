import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  brend: attr('string'),
  model: attr('string'),
  image: attr('string'),
  rating: attr('number'),
  priceOld: attr('number'),
  price: attr('number'),
  review: attr('string'),
  availability: attr('boolean'),
  novelty: attr('boolean'),
  bestseller: attr('boolean')
});
