import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfoREgNbW8n9FZBiwreXWq-cUI8J_bWPI",
  authDomain: "web1-ad2b6.firebaseapp.com",
  projectId: "web1-ad2b6",
  storageBucket: "web1-ad2b6.appspot.com",
  messagingSenderId: "169880191727",
  appId: "1:169880191727:web:652fa2ee458448d173911a",
  measurementId: "G-C4FRRKDXT3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

const firebaseStorage = getStorage(firebaseApp);

export {firebaseApp, auth, firebaseStorage};