import Joi from 'joi'

// export const PASSWORD_REGEX = new RegExp(
//   '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})'
// )

export const authSignup = Joi.object().keys({
  first_name: Joi.required(),
  last_name: Joi.required(),
  username: Joi.required(),
  password: Joi.required(),
})
export const validateCategory = Joi.object().keys({
  name: Joi.string().required(),
})

export const authSignin = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
})
