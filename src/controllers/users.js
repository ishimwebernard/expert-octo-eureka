import 'firebase/firestore';
import 'firebase/auth';

import firebase from '../../firebase.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class Users {
    static login = async(req, res) => {
      try{
        const auth = firebase.auth()
        .signInWithEmailAndPassword( req.body.email, req.body.password)
        .then((userCredentials) => {
           return res.send('User Signed In Sucesfully')
        })
        .catch((error) => {
            return res.status(400).send(error.message)
        })
      }catch(error) {
          console.log(error)
          return res.status(400).send('Something went wrong')
      }

    }

    static logout = async(req, res) => {
        const auth = firebase.auth()
        .signOut(auth).then(()=> {
            return res.send('Signed Out Succesfully')
        }).catch(()=>{
            return res.status(400).send('Something went wrong')
        })
    }
}