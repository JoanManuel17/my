import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTGlveG3-wsZqb5nQRzYb54cjnH_CuAoE",
  authDomain: "web2-908ea.firebaseapp.com",
  projectId: "web2-908ea",
  storageBucket: "web2-908ea.appspot.com",
  messagingSenderId: "87392426813",
  appId: "1:87392426813:web:7d5d07d894ee9cb02e8354"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const firebaseStorage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export {firebaseApp, auth, firebaseStorage, db};