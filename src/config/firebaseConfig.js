// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa87G5JXh0QXaPhQHzy1fM8ZjK9sPEUqo",
  authDomain: "peachtienda.firebaseapp.com",
  projectId: "peachtienda",
  storageBucket: "peachtienda.appspot.com",
  messagingSenderId: "207564555426",
  appId: "1:207564555426:web:3e627158223523628ac3fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);