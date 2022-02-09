import { async } from "regenerator-runtime";
import 'firebase/firestore';
import 'firebase/auth';

import firebase from '../../firebase.js'
import { v4 as uuidv4 } from 'uuid';
import AdmissionEmailTemplateGenerator from "../emailTemplates/admission.js";
import RejectionLetterGenerator from "../emailTemplates/rejection.js";

import sendEmail from "./sendEmail.js";

var generator = require('generate-password');
require('firebase/auth')

const db = firebase.firestore();

const checkEmailInUse = async(documentId) => {
    let emailInUser = false;

    const res = await db.collection('waitingForAdmissionUsers').get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
            if(doc.data().user_Email == documentId ){
                emailInUser = true
            }
        })
    })

    return emailInUser
    
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
        const emailInUse = await checkEmailInUse(documentId);
        if(emailInUse == false){
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
        let newUserProfile = {
            email: req.body.user_Email,
            enrolledSubjects: [],
            userSchedule: {},
            lectureVideos: [],
            attendanceReport: {},
            name: req.body.userFullName
        }
        console.log('STARTING')
       try{
           const password = generator.generate({length: 10, numbers: true});
        const reply = await firebase.auth().createUserWithEmailAndPassword(String(req.body.user_Email), password).then(async(reply)=>{
                
        //console.log(reply)
        newUserProfile = {...newUserProfile, uid: reply.user.uid}
        console.log(newUserProfile)
        const settingActiveUser = await db.collection('activeUsers').add(newUserProfile)
        db.collection('waitingForAdmissionUsers').get().then((qSnap)=>{
            qSnap.forEach(async(doc)=>{
                if(doc.data().user_Email == String(req.body.user_Email)){
                    console.log(doc.id)
                    await db.collection('waitingForAdmissionUsers').doc(doc.id).delete()
                    sendEmail(AdmissionEmailTemplateGenerator({email: req.body.user_Email, password: password}), "Regarding your primecs application", req.body.user_Email)

                    console.log('delote')
                }
            })
        })
        })
    
        return res.status(200).send({data: "User admitted succesfully"})
       }catch(e){
           console.log(e)
            return res.status(409).send({message: e.message});
       }
  
    }
    static rejectApplicant = async(req,res) => {
        db.collection('waitingForAdmissionUsers').get().then((qSnap)=>{
            qSnap.forEach(async(doc)=>{
                if(doc.data().user_Email == String(req.body.user_Email)){
                    console.log(doc.id)
                    await db.collection('waitingForAdmissionUsers').doc(doc.id).delete()
                    sendEmail(RejectionLetterGenerator(),"Regarding your primecs application", req.body.user_Email)
                }
            })
            return res.send('Applicant rejeted succesfully')
        }).catch((e)=>{
            return res.send('Something went wrong')
        })
    }

  
}
export default Application;