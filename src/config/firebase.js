// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDeXWZcP9JKGFcZTIR2MDN_G0V1KF9jhQ",
  authDomain: "disney-49ffb.firebaseapp.com",
  projectId: "disney-49ffb",
  storageBucket: "disney-49ffb.appspot.com",
  messagingSenderId: "963355384562",
  appId: "1:963355384562:web:dae6c01ba1f2608ffb8e6b",
  measurementId: "G-Z9RESB7BE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


