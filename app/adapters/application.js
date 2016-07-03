import RESTAdapter from 'ember-data/adapters/rest';
import config from 'frontend/config/environment';

export default RESTAdapter.extend({
  host: config.host,
  namespace: 'api',
});
