const express = require('express');
const auth = require('../controllers/auth');
const authValidator = require('../middleware/validator/auth');

const router = express.Router();

router.post(
  '/register',
  authValidator.resgisterValidator,
  auth.createUser,
);
router.post(
  '/login',
  authValidator.loginValidator,
  auth.login,
);

module.exports = router;
