import firebase from "firebase";
// import "firebase/app";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQD0WoKieYlJlMwF8_gWEXZRujZlyZnnM",
  authDomain: "fir-f50a1.firebaseapp.com",
  projectId: "fir-f50a1",
  storageBucket: "fir-f50a1.appspot.com",
  messagingSenderId: "5095348105",
  appId: "1:5095348105:web:19d3ead771ef1aa60c7358",
  measurementId: "G-M723CH4L53",
};

const backend = firebase.initializeApp(firebaseConfig);
const auth = backend.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, backend };
