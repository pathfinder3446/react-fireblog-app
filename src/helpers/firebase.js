// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { getDatabase } from "firebase/database";
  
  import { toastSuccessNotify, toastWarnNotify } from "./toastNotify";
  


  const firebaseConfig = {
    apiKey: "AIzaSyDa7pHV65oe7NJUjP8supqgV31W3U9qSI4",
    authDomain: "fireblog-app-ea419.firebaseapp.com",
    databaseURL: "https://fireblog-app-ea419-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fireblog-app-ea419",
    storageBucket: "fireblog-app-ea419.appspot.com",
    messagingSenderId: "1095675052044",
    appId: "1:1095675052044:web:c60b13976335f8112eae29"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getDatabase();

//*Register

export const signIn = async (email, password, navigate) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toastSuccessNotify("Registered successfully!");
  } catch (error) {
    // toastWarnNotify(`${error.message}`);
    console.log(error);
    navigate("/");
  }
};

//*login
export const LogIn = async (email, password, navigate) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    // toastSuccessNotify("Logged in successfully!");
  } catch (error) {
    // toastWarnNotify("email or password is wrong");
    console.log(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

//*logout
export const logOut = (navigate) => {
  try {
    signOut(auth);
    // toastSuccessNotify("Logged out successfully!");
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

//*GOOGLE

export const signUpGoogleProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      // toastSuccessNotify("Logged in successfully!");
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
