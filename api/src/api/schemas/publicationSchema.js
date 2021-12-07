const joi = require('joi');
joi.objectId = require('joi-objectid')(joi);

module.exports = joi.object({
  title: joi.string().required().max(100),
  description: joi.string().required(),
  userId: joi.objectId().required(),
});
