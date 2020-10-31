const Promise = require('bluebird');
const jwt = require('jsonwebtoken');
const config = require('../config');

const signAsync = Promise.promisify(jwt.sign);
const verifyAsync = Promise.promisify(jwt.verify);

const generateToken = async ({ _id }) => {
  const paylaod = { _id };
  const { TTL, secret } = config.jwt;
  const token = await signAsync(paylaod, secret, { expiresIn: TTL });
  return token;
};

const verifyToken = async (token) => {
  try {
    const payload = await verifyAsync(token, config.jwt.secret);
    return payload;
  } catch (err) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
