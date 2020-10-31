const express = require('express');
const application = require('../controllers/application');
const authenticate = require('../middleware/auth');
const applicationValidator = require('../middleware/validator/application');

const router = express.Router();
router.post(
  '/',
  applicationValidator.createApplication,
  application.createApplication,
);
router.get(
  '/',
  authenticate,
  application.getApplications,
);

module.exports = router;
