const applicationRoutes = require('./application');

const bindRoutes = (app) => {
  app.get('/', (req, res) => {
    res.ok({ message: 'Health check OK' });
  });
  app.use('/api/application', applicationRoutes);
};
module.exports = { bindRoutes };
