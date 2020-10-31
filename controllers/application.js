const application = require('../data/application');

module.exports = {
  createApplication: async (req, res) => {
    try {
      const createdApplication = await application.create({
        ...req.body,
        createdAt: Date.now(),
      });
      res.ok(createdApplication);
    } catch (err) {
      res.serverError(err);
    }
  },
  getApplications: async (req, res) => {
    try {
      const { page, limit } = req.query;
      const applications = await application.getApplications(page, limit);
      res.ok(applications);
    } catch (err) {
      console.log(err);
      res.serverError(err);
    }
  },
};
