import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
apiKey: "AIzaSyAC7OK6OsZqcx47TwRayV5FCO1VRqux5Xg",
  authDomain: "voting-app-c152f.firebaseapp.com",
  databaseURL: "https://voting-app-c152f-default-rtdb.firebaseio.com",
  projectId: "voting-app-c152f",
  storageBucket: "voting-app-c152f.appspot.com",
  messagingSenderId: "218761788961",
  appId: "1:218761788961:web:92761fad158592c92ead60",
  measurementId: "G-655F6W10KZ"


    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();