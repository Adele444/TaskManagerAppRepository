import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyi_JIbSWp5MmbOtoShBEy8nqsHYY_YOQ",
  authDomain: "filestorageapp4025.firebaseapp.com",
  databaseURL: "https://filestorageapp4025-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filestorageapp4025",
  storageBucket: "filestorageapp4025.firebasestorage.app",
  messagingSenderId: "911220990565",
  appId: "1:911220990565:web:866429b316c28c90b71c8c",
  measurementId: "G-4THDJX7VQW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
