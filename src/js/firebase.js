import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhoP-ACIuC5v_4drzEzLxSWhZueqk4bjA",
  authDomain: "iccs340-8e36f.firebaseapp.com",
  projectId: "iccs340-8e36f",
  storageBucket: "iccs340-8e36f.appspot.com",
  messagingSenderId: "591462050748",
  appId: "1:591462050748:web:1112330f2bbd04f2a319b9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}