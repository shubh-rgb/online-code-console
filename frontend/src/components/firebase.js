// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcRWQmLbZDNA11cD1fBYye1kAV2cPaCoA",
  authDomain: "knowledge-craft-f1ce2.firebaseapp.com",
  projectId: "knowledge-craft-f1ce2",
  storageBucket: "knowledge-craft-f1ce2.firebasestorage.app",
  messagingSenderId: "867074024145",
  appId: "1:867074024145:web:8a47d4e39394a49bb7dbf0",
  measurementId: "G-9N32HTVS0W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };
