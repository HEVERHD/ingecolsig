// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMc_d-nja3GCoCIzbmuiWO0idH5WxScjU",
  authDomain: "ingecol-1c142.firebaseapp.com",
  projectId: "ingecol-1c142",
  storageBucket: "ingecol-1c142.appspot.com",
  messagingSenderId: "826368779422",
  appId: "1:826368779422:web:25b80f827317ab3dd4878f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const  FirebaseAuth = getAuth(FirebaseApp);
export const FirestoreDB = getFirestore(FirebaseApp)
