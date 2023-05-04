// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP77qk6KPdPPUpCLu_A44n7rKk7E0Z_Qw",
  authDomain: "royal-express-feedback.firebaseapp.com",
  projectId: "royal-express-feedback",
  storageBucket: "royal-express-feedback.appspot.com",
  messagingSenderId: "746297040039",
  appId: "1:746297040039:web:4f1e31097fd152bfa24f82",
  measurementId: "G-VSCCNHX3ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
