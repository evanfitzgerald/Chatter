import firebase from 'firebase';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHuj8U4AX1-LaeblzMVx_7d9uGNpDCMsw",
    authDomain: "yak-yak-db.firebaseapp.com",
    databaseURL: "https://yak-yak-db.firebaseio.com",
    projectId: "yak-yak-db",
    storageBucket: "yak-yak-db.appspot.com",
    messagingSenderId: "604367461710"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });  export default firebaseApp.firestore();