import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDTeBsX19xXUibPBuzGwFs9yKt4-k5QKi0",
    authDomain: "unichat-4c01f.firebaseapp.com",
    projectId: "unichat-4c01f",
    storageBucket: "unichat-4c01f.appspot.com",
    messagingSenderId: "85990207617",
    appId: "1:85990207617:web:70d1d51a148be3ea9d5d80"
  }).auth()