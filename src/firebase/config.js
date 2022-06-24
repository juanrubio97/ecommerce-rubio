// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo9CIYARzMA6h6I2n9W97aBdoe5kM63R0",
  authDomain: "ecommerce-rubio.firebaseapp.com",
  projectId: "ecommerce-rubio",
  storageBucket: "ecommerce-rubio.appspot.com",
  messagingSenderId: "1086067441254",
  appId: "1:1086067441254:web:923197dfaeaf4ca2adb7a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}