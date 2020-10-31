/* eslint-disable no-param-reassign */
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
      const savedApplication = await Application.findOneAndUpdate(
        {
          phone: data.phone,
          email: data.email,
        },
        data,
        {
          upsert: true,
          new: true,
        },
      );
      return savedApplication;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  getApplications: async (page, limit) => {
    try {
      limit = Number(limit) || 10;
      page = Number(page) || 1;
      let skips = 0;
      if (page > 1) { skips = limit * (page - 1); }
      const applications = await Application
        .find({})
        .sort({ createdAt: -1 })
        .skip(skips)
        .limit(limit);
      const totalApplication = await Application.countDocuments();
      const hasMore = totalApplication > page * limit;
      return { applications, hasMore };
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
