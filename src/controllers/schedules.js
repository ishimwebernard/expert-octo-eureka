import 'firebase/firestore';
import firebase from '../../firebase.js'
import { v4 as uuidv4 } from 'uuid';

const db = firebase.firestore();


export default class Schedules{

    static createNewSchedule = (req, res) => {
        db.collection('schedules').add(req.schedule).then(()=>{
            return res.status(200).send('Succesfully Created a Schedule')
        }).catch((error)=>{
            return res.status(400).send(error)
        })
    }

    static addParticipants = (req, res) => {
        db.collection('schedules').where("scheduleName","==", req.body.scheduleName).get().then((qsnapShot)=>{
            qsnapShot.forEach((doc)=>{
                var participants = doc.data().participants;
                const participantsToAdd = req.body.participantsToAdd
                console.log(participants)
                console.log('------------------', participantsToAdd)
                console.log(Object.keys(doc))
                db.collection('schedules').doc(doc.id).set(
                    {
                        participants: [...participants, ...participantsToAdd],
                        times: [...doc.data().times] 
                    }
                )

            })
            return res.send('Succesfully added participants')
        }).catch((error)=>{
            console.log(error)
            return res.send('Something went wrong')
        })
    }

    static getAllSchedules = (req, res) => {

        db.collection('schedules').get().then((qSnapShot)=>{
            var documents = []
            qSnapShot.forEach((doc)=>{
                documents.push(doc.data())
            })
            return res.send(documents)
        }).catch((error)=>{
            return res.send('Something went wrong')
        })
    }
    


}