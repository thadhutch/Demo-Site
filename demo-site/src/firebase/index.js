import firebase from 'firebase/app';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBj4m4eY3AsKbr4ACLlxf2Rk6niyjTGUAY",
    authDomain: "spacepath-demo.firebaseapp.com",
    projectId: "spacepath-demo",
    storageBucket: "spacepath-demo.appspot.com",
    messagingSenderId: "83231714550",
    appId: "1:83231714550:web:17b668f0d51aa132c990d7",
    measurementId: "G-SXMDEHHWJ4"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };