import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDevgE4fLkIi1zR8ldC7pV9Sru6AvV47Q4",
  authDomain: "crwn-db-a7199.firebaseapp.com",
  projectId: "crwn-db-a7199",
  storageBucket: "crwn-db-a7199.appspot.com",
  messagingSenderId: "597378498905",
  appId: "1:597378498905:web:2185682604345dabe60c48",
  measurementId: "G-39PBS2W2BD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
