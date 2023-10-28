
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBQSVg2tfxEy5RI2b_Kdg926aGmgcBC40A",
  authDomain: "typingspeedtestproject.firebaseapp.com",
  projectId: "typingspeedtestproject",
  storageBucket: "typingspeedtestproject.appspot.com",
  messagingSenderId: "499389336623",
  appId: "1:499389336623:web:2a0011e60cfeb90c6ccada"
};


  const firebaseapp =firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const db = firebaseapp.firestore();

  export {auth,db} 

  