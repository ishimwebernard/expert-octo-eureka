import 'firebase/firestore';
import firebase from '../../firebase.js'

const db = firebase.firestore();

export default class Applicants {
    static getWaitingForAdmission = async({req,res}) => {
        var allApplicants = [];
        db.collection('waitingForAdmissionUsers').get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=> {
                allApplicants.push(doc.data())
            })
            return res.status(200).send(allApplicants)
            
        })
        
        
    } 

    static getActiveUsers = async({req,res}) => {
        var allApplicants = [];
        db.collection('activeUsers').get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=> {
                allApplicants.push(doc.data())
            })
            return res.status(200).send(allApplicants)
            
        })
        
        
    } 

}