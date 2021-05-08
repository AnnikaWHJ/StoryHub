import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAaXN9MaMu6hZwV2mWfKTMSt48DV9TqwLE",
  authDomain: "wireleibraries.firebaseapp.com",
  projectId: "wireleibraries",
  storageBucket: "wireleibraries.appspot.com",
  messagingSenderId: "932106612000",
  appId: "1:932106612000:web:89b3f1c842d9a897edfb45"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
