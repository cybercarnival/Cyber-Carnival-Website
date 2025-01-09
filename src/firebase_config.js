// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI60wmqpaVUi4gzKwS8HYnmvtbLfWXviI",
  authDomain: "cyber-carnival-543bf.firebaseapp.com",
  projectId: "cyber-carnival-543bf",
  storageBucket: "cyber-carnival-543bf.appspot.com",
  messagingSenderId: "120581253051",
  appId: "1:120581253051:web:111d224b55aee2777bc69e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
