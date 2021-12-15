import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUaFjGSvKnr0FonEhIDQPsJ4YVER-BC1I",
  authDomain: "my-service-c9225.firebaseapp.com",
  databaseURL:
    "https://my-service-c9225-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-service-c9225",
  storageBucket: "my-service-c9225.appspot.com",
  messagingSenderId: "498679010117",
  appId: "1:498679010117:web:25883b38791c945d8ea42c",
  measurementId: "G-N1DF5GM8TE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, db };
