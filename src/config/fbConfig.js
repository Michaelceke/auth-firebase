import  firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyBjfCzM2Rqo5rFw4XYFIrzjoLf894XGpE4",
    authDomain: "appfire-server.firebaseapp.com",
    projectId: "appfire-server",
    storageBucket: "appfire-server.appspot.com",
    messagingSenderId: "399575000024",
    appId: "1:399575000024:web:447f0d6117e51ad1d888ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 /*  firebase.firestore().settings({timestampsInSnapshots:true})
 */
 firebase.firestore()

  export default firebase