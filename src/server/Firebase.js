// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// to save JSON
import { getFirestore } from "firebase/firestore";
// to save Files(images, videos, music)
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWnRm45GxOVm8TkmiiG4liSl_02cKwUxg",
  authDomain: "e-commerce-cc873.firebaseapp.com",
  projectId: "e-commerce-cc873",
  storageBucket: "e-commerce-cc873.appspot.com",
  messagingSenderId: "866085375666",
  appId: "1:866085375666:web:6daa6f4e6ba51d24e503ab",
  measurementId: "G-1BKEZVNCHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);