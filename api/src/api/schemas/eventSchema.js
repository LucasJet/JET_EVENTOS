const joi = require('joi');

joi.objectId = require('joi-objectid')(joi);

module.exports = joi.object({
  title: joi.string().required().max(100),
  description: joi.string().required(),
  date: joi.string().max(10),
  hour_from: joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required(),
  hour_to: joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required(),
  required: joi.bool().required(),
  userId: joi.objectId().required(),
});
