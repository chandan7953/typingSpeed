
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyCUFJcxnidn9Zs8W3lLGaUpiHzT9YT13vg",
  authDomain: "typingproject-f7318.firebaseapp.com",
  projectId: "typingproject-f7318",
  storageBucket: "typingproject-f7318.appspot.com",
  messagingSenderId: "81453543879",
  appId: "1:81453543879:web:1397db54998dac82a229e2",
  measurementId: "G-0ZLSQYLP4T"
};

  const firebaseapp =firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const db = firebaseapp.firestore();

  export {auth,db} 