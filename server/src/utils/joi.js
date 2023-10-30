export const authSignup = Joi.object().keys({
  first_name: Joi.required(),
  last_name: Joi.required(),
  username: Joi.required(),
  password: Joi.required(),
