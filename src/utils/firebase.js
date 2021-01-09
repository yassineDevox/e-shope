import firebase from 'firebase/app'
import 'firebase/auth';
  
var firebaseConfig = {   
   apiKey: "AIzaSyBKtEoXznS3abkEeGaL18eQLy3EZpD2ZKI",
   authDomain: "e-shop-project-8e107.firebaseapp.com",
   databaseURL: "https://e-shop-project-8e107-default-rtdb.firebaseio.com",
   projectId: "e-shop-project-8e107",
   storageBucket: "e-shop-project-8e107.appspot.com",
   messagingSenderId: "831581921068",
   appId: "1:831581921068:web:95492c8957d790d2b35689",
   measurementId: "G-H4ZTWYF62X"
};  

// Initialize Firebase  
const app = firebase.initializeApp(firebaseConfig);  
  
//exporter notre base de données
export default app; 
//export the auth app
export const auth = app.auth();
