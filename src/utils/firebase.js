import * as firebase from "firebase";  
import 'firebase/auth';
  
var firebaseConfig = {   
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,  
   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAINE,  
   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,  
   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,  
   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,  
   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,  
   appId: process.env.REACT_APP_FIREBASE_APP_ID  
};  

// Initialize Firebase  
var app = firebase.initializeApp(firebaseConfig);  
  
//exporter notre base de données
export default app; 
//export the auth app
export const auth = app.auth();
