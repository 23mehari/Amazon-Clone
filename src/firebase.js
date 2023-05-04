// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBF0dXIawl90XM8Jol9LKP-KiloY9x63J0",
  authDomain: "clone-abe8a.firebaseapp.com",
  projectId: "clone-abe8a",
  storageBucket: "clone-abe8a.appspot.com",
  messagingSenderId: "509966378029",
  appId: "1:509966378029:web:699a7c8eb5c7dd400244a4",
  measurementId: "G-VB9XJ06F9F",
};

// const App = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = getAuth;

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };