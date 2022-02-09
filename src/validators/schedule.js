import ScheduleSchema from '../validate_schema/schedule'
import Joi from "joi"

const NewSchedule = Joi.object({
    name: Joi.string().required(),
})
class Schedule{
     static ValidateRow  = async(req, res, next) =>{
        const {error} = await ScheduleSchema.validate(req.body);
        if(error){
            res.status(400).send({error: error.details[0].message})
        }else{
            next()
        }
    }
    static ValidateNewSchedule  = async(req, res, next) =>{
        const {error} = await NewSchedule.validate(req.body);
        if(error){
            res.status(400).send({error: error.details[0].message})
        }else{
            next()
        }
    }

}