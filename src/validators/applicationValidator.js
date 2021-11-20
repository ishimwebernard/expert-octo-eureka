import ApplicationSchema from '../validate_schema/applicationInfo'

class ApplicationValidator{
    static validateApplication = async(req, res, next) => {
        const {error} = await ApplicationSchema.validate(req.body);
        if(error){
            res.status(400).send({error: error.details[0].message})
        }else{
            next()
        }
    }
}
export default ApplicationValidator;