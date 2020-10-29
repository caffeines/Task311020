const Application = require('../../../models/application');

module.exports = {
  /**
   * Create a new application.
   * @async
   * @param {Object} application - a user object.
   * @returns {Promise} - a Promise, resolving to the application value in the database.
   */
  create: async (data) => {
    try {
      const newApplication = new Application(data);
      const savedApplication = await newApplication.save();
      return savedApplication;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
