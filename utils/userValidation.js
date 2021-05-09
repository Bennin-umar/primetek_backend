const Joi = require("joi")

const validateUserSignIn=new Joi.object({
    email:Joi.string().required().min(8),
    password:Joi.string().required(),
})
const validateUserSignUp=new Joi.object({
    email:Joi.string().required().min(8),
    password:Joi.string().required(),
    
})
module.exports={validateUserSignIn,validateUserSignUp}