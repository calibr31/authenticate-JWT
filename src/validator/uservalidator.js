const { Joi, validate } = require("express-validation");


const signupValidation =validate( {
  body: Joi.object({
    username: Joi.string().trim().required().min(3).messages({
      "string.base": "Username must be a string",
      "string.empty": "Username is required",
      "string.min": "Username must be at least 3 characters long",
      "any.required": "Username is required",
    }),
    email: Joi.string().trim().required().email().messages({
      "string.base": "Email must be a string",
      "string.empty": "Email is required",
      "string.email": "Email must be a valid email address",
      "any.required": "Email is required",
    }),
    password: Joi.string().trim().required().min(8).messages({
      "string.base": "Password must be a string",
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters long",
      "any.required": "Password is required",
    }),
    age: Joi.number().required().min(18).max(80).messages({
      "number.base": "Age must be a number",
      "number.min": "You must be at least 18 years old",
      "number.max": "Age must be less than or equal to 80",
      "any.required": "Age is required",
    }),
  })
},{},{abortEarly:false});



const loginValidation =validate( {
  body: Joi.object({
    email: Joi.string().trim().email().required().messages({
      "string.base": "Email must be a string",
      "string.empty": "Email is required",
      "string.email": "Email must be a valid email address",
      "any.required": "Email is required",
    }),
    password: Joi.string().trim().min(8).required().messages({
      "string.base": "Password must be a string",
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters long",
      "any.required": "Password is required",
    }),
  }),
},{},{abortEarly:false});

module.exports = {
  signupValidation,
  loginValidation,
};
