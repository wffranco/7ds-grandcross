import firebase from 'firebase/app';
// import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCFazW26175vIwGPIdYBgBdh5PQASz9mZE',
  authDomain: 'grand-cross-7ds.firebaseapp.com',
  projectId: 'grand-cross-7ds',
  storageBucket: 'grand-cross-7ds.appspot.com',
  messagingSenderId: '694417478012',
  appId: '1:694417478012:web:b0b9ccd40e499bd00c54f9',
  measurementId: 'G-5913LH1RW5',
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
