const joi = require('joi');

module.exports = joi.object({
  fullname: joi.string().required().max(100),
  date_birth: joi.date(),
  email: joi.string().required().email().max(100),
  city: joi.string().required().max(100),
  school: joi.string().required().max(100),
  password: joi.string().required().max(100),
  active: joi.bool().required(),
  role: joi.string().default('student').max(7),
});
