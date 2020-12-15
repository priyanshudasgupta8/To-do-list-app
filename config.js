import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAYFod5HDymzhu5kNPcyBWtop3-UJVMnY4",
  authDomain: "to-do-list-c0fe7.firebaseapp.com",
  projectId: "to-do-list-c0fe7",
  storageBucket: "to-do-list-c0fe7.appspot.com",
  messagingSenderId: "1012032510239",
  appId: "1:1012032510239:web:0b512e7ad2aefc18ccb82a"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
