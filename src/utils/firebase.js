import * as firebase from "firebase";  
  
var firebaseConfig = {  
    /* 
    replace this object with yours 
    */  
   apiKey: "AIzaSyCm54M-FmiVcYqeAofITgVdboAzhIpc0tU",  
   authDomain: "reactcrud-d6fad.firebaseapp.com",  
   databaseURL: "https://reactcrud-d6fad.firebaseio.com",  
   projectId: "reactcrud-d6fad",  
   storageBucket: "reactcrud-d6fad.appspot.com",  
   messagingSenderId: "666106395244",  
   appId: "1:666106395244:web:4eb7684e35149228c23649"  
};  
  
// Initialize Firebase  
var fireDb = firebase.initializeApp(firebaseConfig);  
  
export default fireDb.database().ref(); 