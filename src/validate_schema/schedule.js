import Joi from "joi"

const schedule = Joi.object({
    title: Joi.string().required(),
    startDate:  Joi.string().required(),
    endDate:  Joi.string().required(),
    id:  Joi.number().required(),
    location:  Joi.string().required()
})

export default schedule
