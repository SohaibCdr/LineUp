import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGeq429ZdanHo8jyU70ovKlUgxLKvCvJk",
  authDomain: "db2cpiproject.firebaseapp.com",
  projectId: "db2cpiproject",
  storageBucket: "db2cpiproject.appspot.com",
  messagingSenderId: "949094886221",
  appId: "1:949094886221:web:879ab9f26ce0e6e592a504",
  measurementId: "G-N00GTTF9JW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const db = getFirestore();
const storage = getStorage(app);
export { Auth, db, storage };



