// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, Firestore} from "@firebase/firestore";
import { getAnalytics } from "@firebase/analytics";
import { getAuth,signInWithPopup, signInWithEmailAndPassword, UserCredential, GoogleAuthProvider } from '@firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjKqdmyskxuluF5syOBqZ0fddQie78iNA",
  authDomain: "trip-planner-bc060.firebaseapp.com",
  projectId: "trip-planner-bc060",
  storageBucket: "trip-planner-bc060.appspot.com",
  messagingSenderId: "660574517473",
  appId: "1:660574517473:web:19947030fb42958af51fa0",
  measurementId: "G-XD54JR86XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export default app;