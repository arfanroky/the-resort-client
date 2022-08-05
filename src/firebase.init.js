// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 /*  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId */
  apiKey: "AIzaSyDFcQ1T21Kr1Dtd-24cdpeJ9ec12cJuj9g",
  authDomain: "the-resort-f7c3d.firebaseapp.com",
  projectId: "the-resort-f7c3d",
  storageBucket: "the-resort-f7c3d.appspot.com",
  messagingSenderId: "979719375198",
  appId: "1:979719375198:web:765be99dab3852631067cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;