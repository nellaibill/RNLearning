// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7JjHBbkYFYZ_CrpHvGVhYSG6m1hceLmI",
  authDomain: "rnlearningfirestore.firebaseapp.com",
  projectId: "rnlearningfirestore",
  storageBucket: "rnlearningfirestore.appspot.com",
  messagingSenderId: "9940506458",
  databaseURL: "https://rnlearningfirestore.firebaseio.com",
  appId: "1:9940506458:web:19f772a167d92816398563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//app.firestore().settings({ experimentalForceLongPolling: true, merge:true });

// You've initialized a Firebase app somewhere...
//const app = initializeApp(firebaseConfig);

// WORKS: Enable long polling auto-detection when initializing Firestore
export const firestoreDB = initializeFirestore(app, { experimentalAutoDetectLongPolling: true, });

//export const firestoreDB = getFirestore(app);