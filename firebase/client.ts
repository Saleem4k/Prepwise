import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV8TH8K8eBsrTfPDJEKjaTNZw4tKkzt5k",
  authDomain: "prepwise-9209e.firebaseapp.com",
  projectId: "prepwise-9209e",
  storageBucket: "prepwise-9209e.firebasestorage.app",
  messagingSenderId: "1072038380230",
  appId: "1:1072038380230:web:0a5697e60233b0b9b54dc7",
  measurementId: "G-8JH80CK4RF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
