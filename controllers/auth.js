const user = require('../data/user');

module.exports = {
  createUser: async (req, res) => {
    try {
      const createdUser = await user.create(req.body);
      res.ok(createdUser);
    } catch (err) {
      res.serverError(err);
    }
  },
};
