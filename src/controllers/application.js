import { async } from "regenerator-runtime";
import 'firebase/firestore';
import firebase from '../../firebase.config'
import { v4 as uuidv4 } from 'uuid';
var generator = require('generate-password');

require('firebase/auth')

const db = firebase.firestore();
const newUserProfile = {
    email: req.boy.user_Email,
    enrolledSubjects: [],
    userSchedule: {},
    lectureVideos: [],
    attendanceReport: {}
}
class Application {
    static sendApplication = async(req, res) =>{
        try{
        const userCreation = await  db.collection('waitingForAdmissionUsers').doc(uuidv4()).set({ ...req.body})
        res.status(200).send({body: "Application Sent Succesfully"})
        }catch (error) {
            res.status(409).send({error: error.message});
        }
    }
    static admitApplicant = async(req, res) => {
        const reply = await firebase.auth().createUserWithEmailAndPassword(String(req.body.user_Email), generator.generate({
            length: 10,
            numbers: true
        }));
        const settingActiveUser = await db.collection('activeUsers').doc(reply.user.uid).set({ newUserProfile})
        
    }
}
export default Application;