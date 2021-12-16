import ApplicationSchema from '../validate_schema/applicationInfo'
import 'firebase/firestore';
import firebase from '../../firebase'

class ApplicationValidator{
    static validateApplication = async(req, res, next) => {
        const {error} = await ApplicationSchema.validate(req.body);
        if(error){
            res.status(400).send({error: error.details[0].message})
        }else{
            next()
        }
    }
    static checkIfEmailIsInUse = async(req, res, next) => {
        firebase.firestore().collection('waitingForAdmissionUsers').document('')
    }

}
export default ApplicationValidator;