import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqILpCwNCbl9hJAgaKaokDAV-amaZJiv0",
  authDomain: "crwn-db-f8a6d.firebaseapp.com",
  projectId: "crwn-db-f8a6d",
  storageBucket: "crwn-db-f8a6d.appspot.com",
  messagingSenderId: "315447259502",
  appId: "1:315447259502:web:09cb49cde7014dcdb4517f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmpt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
