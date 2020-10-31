const joi = require('joi');

const resgisterValidator = (req, res, next) => {
  const schema = joi.object().keys({
    email: joi.string().trim().email().required(),
    password: joi.string().min(2).max(20).required(),
    name: joi.string().trim().required(),
  });
  const { value, error } = schema.validate(req.body);
  if (error) {
    res.badRequest({
      title: 'Invalid request data',
      error,
    });
    return;
  }
  req.body = value;
  next();
};

const loginValidator = (req, res, next) => {
  const schema = joi.object().keys({
    email: joi.string().trim().email().required(),
    password: joi.string().min(2).max(20).required(),
  });
  const { value, error } = schema.validate(req.body);
  if (error) {
    res.badRequest({
      title: 'Invalid request data',
      error,
    });
    return;
  }
  req.body = value;
  next();
};

module.exports = {
  resgisterValidator,
  loginValidator,
};
