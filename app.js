import {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    googleProvider,
    signInWithPopup,
    GoogleAuthProvider
} from "./firebase.js"

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
    } else {
        console.log("user not exist")
    }
});

let signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user", user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
        });

    email.value = "";
    password.value = "";
}

let signupBtn = document.getElementById("signupBtn")
signupBtn.addEventListener('click', signup)

let login = () => {
    let lemail = document.getElementById("lemail");
    let lpassword = document.getElementById("lpassword");
    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            location.assign("https://sajidnoormuhammad.github.io/Quiz-App/")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
        });
    lemail.value = "";
    lpassword.value = "";
}

let loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener('click', login)


let logout = () => {

    signOut(auth)
        .then(() => {
            console.log("Logout Successfully")
        }).catch((error) => {
            // An error happened.
        });
}

let logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener('click', logout)

let verifyBtn = document.getElementById("verifyBtn")
verifyBtn.addEventListener('click', () => {
    sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log("sent")
        });
})

let loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            location.assign("https://sajidnoormuhammad.github.io/Quiz-App/")
        }).catch((error) => {
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error, credential)
        });

}

let googleBtn = document.getElementById("googleBtn");
googleBtn.addEventListener("click", loginWithGoogle)