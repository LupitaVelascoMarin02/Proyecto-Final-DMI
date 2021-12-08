// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAUvig9eOSUZ0TUaql388B4i7bAz1G2S4",

  authDomain: "project-37470.firebaseapp.com",

  projectId: "project-37470",

  storageBucket: "project-37470.appspot.com",

  messagingSenderId: "780447343790",

  appId: "1:780447343790:web:801fdced33a5d3ae96793f"

};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
