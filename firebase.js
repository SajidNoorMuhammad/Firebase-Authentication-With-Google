import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyByBkrY1_haXPuligYvo-JLuQvJv_m2ONg",
    authDomain: "quiz-app-25040.firebaseapp.com",
    projectId: "quiz-app-25040",
    storageBucket: "quiz-app-25040.appspot.com",
    messagingSenderId: "1075536468084",
    appId: "1:1075536468084:web:ce04ebe5ff5cc69df19921"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    googleProvider,
    signInWithPopup,
    GoogleAuthProvider
}