import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBRNhwU3uUjvs8PMcixFeu5_CNbQhNRr4E",
  authDomain: "chaton-565cd.firebaseapp.com",
  projectId: "chaton-565cd",
  storageBucket: "chaton-565cd.appspot.com",
  messagingSenderId: "955169529765",
  appId: "1:955169529765:web:6e41ffe990b3fd1d6c124c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
