import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJMQk0XY0EqoAAsOIk5gcHXHnrwQkBS7w",
  authDomain: "clone-9c973.firebaseapp.com",
  projectId: "clone-9c973",
  storageBucket: "clone-9c973.appspot.com",
  messagingSenderId: "398021581201",
  appId: "1:398021581201:web:52947ad6a5ee5097eb6230"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
