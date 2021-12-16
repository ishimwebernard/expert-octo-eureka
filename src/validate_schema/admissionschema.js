import Joi from "joi"

const admissionObject = Joi.object({
    user_Email: Joi.string().email().required()
})

export default admissionObject
