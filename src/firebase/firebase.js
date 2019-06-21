import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyANVkQQi4yntjD_xZ2O8sFOqRe0A0eOPQ8",
    authDomain: "aiesecopp.firebaseapp.com",
    databaseURL: "https://aiesecopp.firebaseio.com",
    projectId: "aiesecopp",
    storageBucket: "aiesecopp.appspot.com",
    messagingSenderId: "50086499611",
    appId: "1:50086499611:web:a3f366aa1aed80c1"
  };
  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);
  export const db = app.database();