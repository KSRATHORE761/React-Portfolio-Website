// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgOgLtRbyE02aVzjNPppWhtw-K65tE5dk",
  authDomain: "portfolio-c92b9.firebaseapp.com",
  projectId: "portfolio-c92b9",
  storageBucket: "portfolio-c92b9.appspot.com",
  messagingSenderId: "462092435343",
  appId: "1:462092435343:web:80a2dd04e3ce5aff5695fa",
  measurementId: "G-DCD2RDWCX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);