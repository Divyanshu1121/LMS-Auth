// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8BjCUPJMgMY_4Om8Nus_287YZXCSwJgQ",
    authDomain: "crud-baf58.firebaseapp.com",
    projectId: "crud-baf58",
    storageBucket: "crud-baf58.firebasestorage.app",
    messagingSenderId: "655357763062",
    appId: "1:655357763062:web:468ff911eac6b1efbd3bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFire = getFirestore(app);