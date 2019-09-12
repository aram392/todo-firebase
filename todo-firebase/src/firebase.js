import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDOx4zNahE8UJ3OBxTpwc21oEGlzH1vxyo",
    authDomain: "todolist-firebase-54afa.firebaseapp.com",
    databaseURL: "https://todolist-firebase-54afa.firebaseio.com",
    projectId: "todolist-firebase-54afa",
    storageBucket: "",
    messagingSenderId: "866011797835",
    appId: "1:866011797835:web:ebcb471966b22cc7a1b0ce"
  };
  
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  export default firebase;
