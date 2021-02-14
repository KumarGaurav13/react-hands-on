// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAlI7domX4Rt6ZR-mkUHy96ulwwP_g4fac",
    authDomain: "whatsapp-clone-5ce3d.firebaseapp.com",
    projectId: "whatsapp-clone-5ce3d",
    storageBucket: "whatsapp-clone-5ce3d.appspot.com",
    messagingSenderId: "671614734212",
    appId: "1:671614734212:web:53694f6baca300bb5a97d1",
    measurementId: "G-HCDXLJ1W4G"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  