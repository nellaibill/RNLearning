import { getDatabase, ref, set } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlhNdcsm6rdBFBF7l7-E9tTEaY333X730",
  authDomain: "rnlearning-realtimefirebasedb.firebaseapp.com",
  projectId: "rnlearning-realtimefirebasedb",
  storageBucket: "rnlearning-realtimefirebasedb.appspot.com",
  messagingSenderId: "889474228525",
  appId: "1:889474228525:web:052ba1aa22daa5bfedb3a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtimeDbConfig = getDatabase(app);