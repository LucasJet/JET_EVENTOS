const joi = require('joi');

module.exports = joi.object({
  fullname: joi.string().required().max(100),
  date_birth: joi.string(),
  email: joi.string().required().email().max(100),
  city: joi.string().required().max(100),
  school: joi.string().required().max(100),
  password: joi.string().default('somosJet').max(100),
  active: joi.bool().default(true),
  role: joi.string().default('student').max(7),
  created_at: joi.string(),
});
