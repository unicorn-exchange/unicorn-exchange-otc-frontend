import Joi from "joi-browser";

export const signInValidator = {
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
};
