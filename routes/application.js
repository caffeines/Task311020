const express = require('express');
const application = require('../controllers/application');
const authenticate = require('../middleware/auth');

const router = express.Router();
router.post(
  '/',
  application.createApplication,
);
router.get(
  '/',
  authenticate,
  application.getApplications,
);

module.exports = router;
