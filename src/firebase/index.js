// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdEO84UPkDMDyUAql5srPZzsnaUbWWrCE",
    authDomain: "build-43e53.firebaseapp.com",
    projectId: "build-43e53",
    storageBucket: "build-43e53.appspot.com",
    messagingSenderId: "992166153647",
    appId: "1:992166153647:web:21193afa0873923227f35a",
    measurementId: "G-MJS68PCDQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
export {
    auth,
    db

}