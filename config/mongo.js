const { formatEnv } = require('../lib/utils');

const vars = formatEnv([
  { name: 'MONGO_HOST', defaultValue: 'localhost' },
  { name: 'MONGO_PORT', type: 'number', defaultValue: 27017 },
  { name: 'MONGO_DATABASE_NAME' },
  { name: 'MONGO_ROOT_USER' },
  { name: 'MONGO_PASSWORD' },
]);

module.exports = {
  host: vars.MONGO_HOST,
  port: vars.MONGO_PORT,
  database: vars.MONGO_DATABASE_NAME,
  user: vars.MONGO_ROOT_USER,
  password: vars.MONGO_PASSWORD,
};
