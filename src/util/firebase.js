import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCde78RumbWQOiUYesVIZQlDTySz3T575s",
  authDomain: "easy-utility-tools.firebaseapp.com",
  projectId: "easy-utility-tools",
  storageBucket: "easy-utility-tools.appspot.com",
  messagingSenderId: "30298277758",
  appId: "1:30298277758:web:a914b61aef692a1618552f",
  measurementId: "G-MFHBHKK7V0",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;