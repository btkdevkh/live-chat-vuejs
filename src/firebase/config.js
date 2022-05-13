// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS_OQPLd9M_j5GrrffhJr-NPHGJ4S6LKY",
  authDomain: "live-chat-95557.firebaseapp.com",
  databaseURL: "https://live-chat-95557-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "live-chat-95557",
  storageBucket: "live-chat-95557.appspot.com",
  messagingSenderId: "764735954763",
  appId: "1:764735954763:web:b18d9ebe5c436e5d0212ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const store = getFirestore()
const auth = getAuth()
const timestamp = serverTimestamp

export { app, store, auth, timestamp }