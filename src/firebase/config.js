import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2SN4Wq3-foyO2E3UYXAb_dzPahC8vosE",
  authDomain: "emmy-358ad.firebaseapp.com",
  projectId: "emmy-358ad",
  storageBucket: "emmy-358ad.firebasestorage.app",
  messagingSenderId: "880290753894",
  appId: "1:880290753894:web:cc16bf2f0054e41f6feca7",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
