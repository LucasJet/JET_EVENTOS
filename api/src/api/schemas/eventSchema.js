const joi = require('joi');

joi.objectId = require('joi-objectid')(joi);


module.exports = joi.object({
  title: joi.string().required().max(100),
  description: joi.string().required(),
  date_from: joi.date(),
  date_to: joi.date().ruleset.greater(joi.ref('date_from')).rule({ message: 'Data de fim deve ser maior que a Data de início' }),
  hour_from: joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required(),
  hour_to: joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required(),
  required: joi.bool().required(),
  userId: joi.objectId().required(),
});
