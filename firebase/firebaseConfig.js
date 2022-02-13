import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  authDomain: "job-o-mania.firebaseapp.com",
  projectId: "job-o-mania",
  storageBucket: "job-o-mania.appspot.com",
  messagingSenderId: "246587856374",
  appId: "1:246587856374:web:278122dca3223289f923d7",
  measurementId: "G-99GPMZP8CF"
};



// Initialize Firebase

const app = initializeApp(firebaseConfig);
var auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getFirestore();
const storage = getStorage();
export {auth , provider, database, storage};

