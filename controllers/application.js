const application = require('../data/application');

module.exports = {
  createApplication: async (req, res) => {
    try {
      console.log(req.body);
      const createdApplication = await application.create(req.body);
      console.log(createdApplication);

      res.ok(createdApplication);
    } catch (err) {
      console.log(err.message);

      res.serverError(err);
    }
  },
};
