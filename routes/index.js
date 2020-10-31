const path = require('path');
const applicationRoutes = require('./application');
const authRoutes = require('./auth');

const bindRoutes = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/', 'index.html'));
  });
  app.get('/health', (req, res) => {
    res.ok({ message: 'Health check OK' });
  });
  app.use('/api/application', applicationRoutes);
  app.use('/api/auth', authRoutes);
};
module.exports = { bindRoutes };
