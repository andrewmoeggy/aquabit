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

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
}
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;