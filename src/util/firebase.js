import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyByPzJmiJMGOYCmYVX_XJ5pUJRLjZR_x3w",
    authDomain: "cse-498-r.firebaseapp.com",
    databaseURL: "https://cse-498-r.firebaseio.com",
    projectId: "cse-498-r",
    storageBucket: "cse-498-r.appspot.com",
    messagingSenderId: "1022010049723",
    appId: "1:1022010049723:web:25f752dfe52d4cf96b159e"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;