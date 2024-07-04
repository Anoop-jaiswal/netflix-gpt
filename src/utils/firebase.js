// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2vj7xgSGEPRgPFelLJl3P9A8ZAGuuLr0",
  authDomain: "netflixgpt123456.firebaseapp.com",
  projectId: "netflixgpt123456",
  storageBucket: "netflixgpt123456.appspot.com",
  messagingSenderId: "583932728375",
  appId: "1:583932728375:web:64894c01c14f91a61e1bb2",
  measurementId: "G-21Z0QJQC6Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
