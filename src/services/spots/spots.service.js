// Initializes the `spots` service on path `/spots`
const createService = require('feathers-mongoose');
const createModel = require('../../models/spots.model');
const hooks = require('./spots.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/spots', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('spots');

  service.hooks(hooks);
};
