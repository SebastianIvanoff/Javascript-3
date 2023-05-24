import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fire-store-44b0e.firebaseapp.com",
  projectId: "fire-store-44b0e",
  storageBucket: "fire-store-44b0e.appspot.com",
  messagingSenderId: "892717809076",
  appId: "1:892717809076:web:4623efd2221559f087c6e1"
};


initializeApp(firebaseConfig);

const db = getFirestore() 
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()

export { db,auth, googleProvider }