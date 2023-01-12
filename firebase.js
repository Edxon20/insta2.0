// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA31F0ZAnBE0c-pvCRrBGy0ufCW_d1Xz9M",
  authDomain: "insta-2-yt-b0703.firebaseapp.com",
  projectId: "insta-2-yt-b0703",
  storageBucket: "insta-2-yt-b0703.appspot.com",
  messagingSenderId: "502127408397",
  appId: "1:502127408397:web:d65fff19c3c07d0b506c44"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };