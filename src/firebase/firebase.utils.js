import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAlcrrecFbKiyOZZM5zi5Fas6q68J7ODjE",
    authDomain: "threadz-6428e.firebaseapp.com",
    databaseURL: "https://threadz-6428e.firebaseio.com",
    projectId: "threadz-6428e",
    storageBucket: "threadz-6428e.appspot.com",
    messagingSenderId: "757754139359",
    appId: "1:757754139359:web:dc26ae90a3570caa144f6a",
    measurementId: "G-0QTK62FFG8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;