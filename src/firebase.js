import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNB_0gtFdqoDA0_JaLwmzWandAG8eaNic",
  authDomain: "disney-clone-86f9e.firebaseapp.com",
  projectId: "disney-clone-86f9e",
  storageBucket: "disney-clone-86f9e.appspot.com",
  messagingSenderId: "213486087375",
  appId: "1:213486087375:web:e1a670894c67db66581bba",
  measurementId: "G-V1G8DVV9XZ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const countsCollection = firebaseApp.firestore().collection('counts')

export { auth, provider, storage , countsCollection };
export default db;
