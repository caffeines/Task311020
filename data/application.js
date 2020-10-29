const applicationImpl = require('./impl/mongo/application_impl');

module.exports = {
  /**
   * Create a new application.
   * @async
   * @param {Object} application - a user object.
   * @returns {Promise} - a Promise, resolving to the application value in the database.
   */
  create: async (application) => applicationImpl.create(application),
};
