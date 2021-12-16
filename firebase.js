// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV8mW8bweN6YOg0OKgRZ9umOVs_UUN-pA",
  authDomain: "primecs-1cbfc.firebaseapp.com",
  projectId: "primecs-1cbfc",
  storageBucket: "primecs-1cbfc.appspot.com",
  messagingSenderId: "33832366036",
  appId: "1:33832366036:web:cc0d5c26b3c1b4690ff041",
  measurementId: "G-ETGHB4KYQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;