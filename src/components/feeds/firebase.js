// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyBRopKhIDNvZ2RVAb1XXnvJP5f5EasqwdY",
    authDomain: "linkedin-clone-mafahla.firebaseapp.com",
    projectId: "linkedin-clone-mafahla",
    storageBucket: "linkedin-clone-mafahla.appspot.com",
    messagingSenderId: "541732279356",
    appId: "1:541732279356:web:953287c1e311a5a0ec1f39"
  };

  //this line connects everything
  // const firebaseApp = firebase.intializeApp(firebaseConfig);

  // gets the firebase database
  // const db = firebaseApp.firestore();

  // export { db }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider=new GoogleAuthProvider()

export { db, auth, storage };