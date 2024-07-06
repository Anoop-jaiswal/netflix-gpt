// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcp1X-dNKvxxlQuBcHiDg9graQE1vucaQ",
  authDomain: "netflixgptbyanoop.firebaseapp.com",
  projectId: "netflixgptbyanoop",
  storageBucket: "netflixgptbyanoop.appspot.com",
  messagingSenderId: "1066674448739",
  appId: "1:1066674448739:web:ca91f73e611dbdabc20b56",
  measurementId: "G-BYDVJ35DVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const gitHubProvider = new GithubAuthProvider();
export const provider = new GoogleAuthProvider();
export const auth = getAuth();