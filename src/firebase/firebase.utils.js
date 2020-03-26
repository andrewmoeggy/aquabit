import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBe6wGoNyKi0RGpw7Efm9ANnLsOmvV1MsY",
  authDomain: "aquabit-a9b87.firebaseapp.com",
  databaseURL: "https://aquabit-a9b87.firebaseio.com",
  projectId: "aquabit-a9b87",
  storageBucket: "aquabit-a9b87.appspot.com",
  messagingSenderId: "25520405236",
  appId: "1:25520405236:web:b25d2e3f1025a4042b7ca1"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;