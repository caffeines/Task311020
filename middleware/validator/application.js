const joi = require('joi');

const createApplication = (req, res, next) => {
  console.log(req.body);

  const schema = joi.object().keys({
    email: joi.string().trim().email().required(),
    name: joi.string().trim().required(),
    phone: joi.string().trim().required(),
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
module.exports = { createApplication };
