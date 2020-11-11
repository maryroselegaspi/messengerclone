import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuVVY4IqBmT9uiTVcXvWbCG9Qgx3BqNw0",
    authDomain: "messenger-clone-6e35f.firebaseapp.com",
    databaseURL: "https://messenger-clone-6e35f.firebaseio.com",
    projectId: "messenger-clone-6e35f",
    storageBucket: "messenger-clone-6e35f.appspot.com",
    messagingSenderId: "997754161353",
    appId: "1:997754161353:web:fd8f2967cdf19945fa2518",
    measurementId: "G-CLNHQPM53B"
  };

//   Authentication
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

//   export {db};
export default db;