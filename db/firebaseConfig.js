import React from 'react'
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyD2n_bG2eAtcvrzRrzEIHkntYENV1bQmVY",
  authDomain: "fir-db-98433.firebaseapp.com",
  databaseURL: "https://fir-db-98433.firebaseio.com",
  projectId: "fir-db-98433",
  storageBucket: "fir-db-98433.appspot.com",
  messagingSenderId: "799215944568",
  appId: "1:799215944568:web:a0fdcdae659eb5b98d7e8d",
  measurementId: "G-V4JEL0H1JG"
};
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
  export default firebaseConfig