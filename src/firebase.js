import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBEF0H71ENcwVQGKuOuR4_w-sbejH2mADc",
  authDomain: "clone-74edf.firebaseapp.com",
  projectId: "clone-74edf",
  storageBucket: "clone-74edf.appspot.com",
  messagingSenderId: "960528633538",
  appId: "1:960528633538:web:f2b8eb2303de9e16deb55b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
