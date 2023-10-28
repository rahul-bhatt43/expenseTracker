// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg5dTmQnzpVWFr-bwE5RAii4NKurgokgY",
  authDomain: "expense-tracker-27c58.firebaseapp.com",
  projectId: "expense-tracker-27c58",
  storageBucket: "expense-tracker-27c58.appspot.com",
  messagingSenderId: "847759647120",
  appId: "1:847759647120:web:07aed51afee52d63ec5315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
