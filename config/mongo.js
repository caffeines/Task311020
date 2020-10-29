const { formatEnv } = require('../lib/utils');

const vars = formatEnv([{ name: 'MONGODB_URL' }]);

module.exports = {
  mongodbURL: vars.MONGODB_URL,
};
