// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD92QM8muKBtI7o86VNbgNfK8jayDDQDDs",
  authDomain: "job-drill.firebaseapp.com",
  projectId: "job-drill",
  storageBucket: "job-drill.appspot.com",
  messagingSenderId: "724084997276",
  appId: "1:724084997276:web:15604c2fb8304f971f8159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;