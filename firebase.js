// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdUCGX3B8rzT5tuAA-buvyqIaNuIFmnNQ",
  authDomain: "moviesapp-4a3e2.firebaseapp.com",
  projectId: "moviesapp-4a3e2",
  storageBucket: "moviesapp-4a3e2.appspot.com",
  messagingSenderId: "387665566449",
  appId: "1:387665566449:web:3dc2c2cd754f37425e6750"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };