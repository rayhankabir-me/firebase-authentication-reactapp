// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU53yPdgAkJfwMtYoTx2OUADKdVJv6ItE",
  authDomain: "guestbook-5ecbd.firebaseapp.com",
  projectId: "guestbook-5ecbd",
  storageBucket: "guestbook-5ecbd.appspot.com",
  messagingSenderId: "575225219296",
  appId: "1:575225219296:web:3f3cd244fd5406983d2885",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const respond = createUserWithEmailAndPassword(auth, email, password);
    const user = (await respond).user;
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

export { registerWithEmailAndPassword };
