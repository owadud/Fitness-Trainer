// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4F-aiFkxKiK6BwXb7_ddUdYidETB_M0c",
  authDomain: "gym-trainer-135e4.firebaseapp.com",
  projectId: "gym-trainer-135e4",
  storageBucket: "gym-trainer-135e4.appspot.com",
  messagingSenderId: "334191603132",
  appId: "1:334191603132:web:010ab893ef21951012cfb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;