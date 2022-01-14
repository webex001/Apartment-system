// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLarI4uMqd3PqN5S-ykU8meXR6LIEiu8",
  authDomain: "my-ride-20e53.firebaseapp.com",
  projectId: "my-ride-20e53",
  storageBucket: "my-ride-20e53.appspot.com",
  messagingSenderId: "523828742569",
  appId: "1:523828742569:web:93b9be5798253bbad45cb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }