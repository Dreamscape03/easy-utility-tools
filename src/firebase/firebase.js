import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPw-jnOu3E3ltS7EFspghgVOJH9Ox_HAU",
  authDomain: "examsaathi-9d293.firebaseapp.com",
  databaseURL: "https://examsaathi-9d293-default-rtdb.firebaseio.com",
  projectId: "examsaathi-9d293",
  storageBucket: "examsaathi-9d293.appspot.com",
  messagingSenderId: "230794409225",
  appId: "1:230794409225:web:f35b6ea95f08097fc6cfd8",
  measurementId: "G-RXQW2FJJEP",
};

firebase.initializeApp(firebaseConfig);
export default firebase;