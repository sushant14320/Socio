import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAmnMVG5eUpH4VLBbNeKRtIliWbBsAlP_s",
    authDomain: "socio-3ac19.firebaseapp.com",
    databaseURL: "https://socio-3ac19.firebaseio.com",
    projectId: "socio-3ac19",
    storageBucket: "socio-3ac19.appspot.com",
    messagingSenderId: "702223478737",
    appId: "1:702223478737:web:472e43d7b9b78779c6faf0",
    measurementId: "G-JKJKCZHCP1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;