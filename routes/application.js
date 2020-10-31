const express = require('express');
const application = require('../controllers/application');

const router = express.Router();
router.post(
  '/',
  // isLoggedIn,
  application.createApplication,
);
router.get(
  '/',
  // isLoggedIn,
  application.getApplications,
);

module.exports = router;
