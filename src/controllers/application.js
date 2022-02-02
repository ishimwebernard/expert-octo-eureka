import { async } from "regenerator-runtime";
import 'firebase/firestore';
import firebase from '../../firebase.js'
import { v4 as uuidv4 } from 'uuid';
import AdmissionEmailTemplateGenerator from "../emailTemplates/admission.js";
import sendEmail from "./sendEmail.js";

var generator = require('generate-password');
require('firebase/auth')

const db = firebase.firestore();

const checkEmailInUse = (documentId) => {
    db.collection('waitingForAdmissionUsers').get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
            if(doc.data().user_Email == documentId ){
                return 0
            }
        })
    })
}
class Application {
   
    static sendApplication = async(req, res) =>{
        try{
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
        const applicationJSON = req.body;
        applicationJSON.dateSent = dateTime;
        const documentId= req.body.user_Email;
        
        if(checkEmailInUse(documentId)){
            const userCreation = await  db.collection('waitingForAdmissionUsers').doc(uuidv4()).set({ ...req.body})
            return res.status(200).send({body: "Application Sent Succesfully"})
        }else{
            return res.status(409).send({body: "Email already in use"})
        }
        }catch (error) {
            res.status(409).send({error: error.message});
        }
    }
    static admitApplicant = async(req, res) => {
        const newUserProfile = {
            email: req.body.user_Email,
            enrolledSubjects: [],
            userSchedule: {},
            lectureVideos: [],
            attendanceReport: {},
            name: req.body.userFullName
        }
       try{
           const password = generator.generate({length: 10, numbers: true});
        const reply = await firebase.auth().createUserWithEmailAndPassword(String(req.body.user_Email), password);
        const settingActiveUser = await db.collection('activeUsers').doc(reply.user.uid).set(newUserProfile)
        sendEmail(AdmissionEmailTemplateGenerator({email: req.body.user_Email, password: password}), "Regarding your primecs application", req.body.user_Email)
        return res.status(200).send({data: "User admitted succesfully"})
       }catch(e){
            return res.status(409).send({message: e.message});
       }
    }
  
}
export default Application;