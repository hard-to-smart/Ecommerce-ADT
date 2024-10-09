// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIjKA-yHW5-YuHFDnkv_BDaRmQ1YgBYNM",
  authDomain: "ecommerce-adt.firebaseapp.com",
  projectId: "ecommerce-adt",
  storageBucket: "ecommerce-adt.appspot.com",
  messagingSenderId: "460877846924",
  appId: "1:460877846924:web:1ace55e3fc88ff864b9ea9",
  measurementId: "G-R5GDF1DYLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app)
export default app