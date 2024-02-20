// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQr1LXsr8ZExzJoMjWy7XJJfjvMcG62T8",
  authDomain: "dochub-ca00f.firebaseapp.com",
  projectId: "dochub-ca00f",
  storageBucket: "dochub-ca00f.appspot.com",
  messagingSenderId: "927840663843",
  appId: "1:927840663843:web:89777ea8ab021263cb7496"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth()