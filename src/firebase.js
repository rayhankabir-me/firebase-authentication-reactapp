// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
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
const googleProvider = new GoogleAuthProvider();

//clodu storage
const firebaseApp = getApp();
const storage = getStorage(firebaseApp);

const registerWithEmailAndPassword = async (email, password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    return user;
  } catch (err) {
    throw err;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

const passwordReset = async (email) => {
  // eslint-disable-next-line no-useless-catch
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

const googleLogin = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const user = response.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export {
  app,
  auth,
  googleLogin,
  loginWithEmailAndPassword,
  passwordReset,
  registerWithEmailAndPassword,
  storage,
};
