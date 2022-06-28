import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAXy1hNkFSCIdYPhAKrfc9FZmx65xuyFXQ",
    authDomain: "eborrowadmin.firebaseapp.com",
    projectId: "eborrowadmin",
    storageBucket: "eborrowadmin.appspot.com",
    messagingSenderId: "179877195697",
    appId: "1:179877195697:web:679e767b1d615903ccd790",
    measurementId: "G-W6T62V3K6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const AgriColRef = collection(db, "Agricultures");
export default AgriColRef;
export const AdminColRef = collection(db, "Admins");