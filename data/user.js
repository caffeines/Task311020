const userImpl = require('./impl/mongo/user_impl');

module.exports = {
  create: (data) => userImpl.create(data),
  getUserByEmail: (email) => userImpl.getUserByEmail(email),
};
