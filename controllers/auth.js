/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const User = require('../data/user');
const utils = require('../lib/utils');
const jwt = require('../lib/jwt');

const SALT_ROUND = 10;

module.exports = {
  createUser: async (req, res) => {
    try {
      const { password, name, email } = req.body;
      const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
      const createdUser = await User.create({ password: hashedPassword, name, email });
      res.ok({
        name: createdUser.name,
        id: createdUser._id,
        email: createdUser.email,
      });
    } catch (err) {
      const isDuplicateErr = utils.isDuplicateDocument(err.message);
      if (isDuplicateErr) {
        res.badRequest({ message: 'User already registered' });
        return;
      }
      res.serverError(err);
    }
  },
  login: async (req, res) => {
    try {
      const { password, email } = req.body;
      const user = await User.getUserByEmail(email);
      if (!user) {
        res.notFound({ message: 'User not registered' });
        return;
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        const jwtToken = await jwt.generateToken(user);
        res.ok({
          name: user.name,
          email: user.email,
          token: jwtToken,
        });
      } else {
        res.unauthorized({ message: 'Password incorrect' });
      }
    } catch (err) {
      console.log(err);
      res.serverError(err);
    }
  },
};
