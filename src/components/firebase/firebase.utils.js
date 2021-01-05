import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCg8DqxUwgbSDMY67QXXt4hgmKBbNP8k3o",
    authDomain: "clothing-db-5f2e9.firebaseapp.com",
    projectId: "clothing-db-5f2e9",
    storageBucket: "clothing-db-5f2e9.appspot.com",
    messagingSenderId: "812461605111",
    appId: "1:812461605111:web:8998e6cafd19484ae353f2",
    measurementId: "G-16R6YGQLZ2"
  }

  firebase.initializeApp(config)

  export  const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
 
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase