import React from 'react'
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "G-V4JEL0H1JG"
};
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
  export default firebaseConfig
