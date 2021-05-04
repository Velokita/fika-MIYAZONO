import firebase from 'firebase/app';
// import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCLAzeICaSIglgyogBNMvpez-zN7KsBUWo",
    authDomain: "fikacoder.firebaseapp.com",
    projectId: "fikacoder",
    storageBucket: "fikacoder.appspot.com",
    messagingSenderId: "123477076599",
    appId: "1:123477076599:web:63f9e9b13a3dd2dae6f472"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const Data = fb.firestore();
