const User = require('../../../models/user');

module.exports = {
  create: async (data) => {
    try {
      const newUser = new User(data);
      const createdUser = await newUser.save();
      return createdUser;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  getUserByEmail: async (email) => {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
