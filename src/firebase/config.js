// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWDlgW959xif7u8SO8Z9_zYMCSMD4N6Fg",
  authDomain: "desarrollo-web-5c6be.firebaseapp.com",
  projectId: "desarrollo-web-5c6be",
  storageBucket: "desarrollo-web-5c6be.appspot.com",
  messagingSenderId: "337131677213",
  appId: "1:337131677213:web:bce443ed8cfb13aeff48f4",
  measurementId: "G-DXCYE8YP88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);