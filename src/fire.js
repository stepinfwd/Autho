import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAeHrBoEx6GQD64rJkY1Piw85SkJnhZR6M",
  authDomain: "auth-bfc5c.firebaseapp.com",
  databaseURL: "https://auth-bfc5c.firebaseio.com",
  projectId: "auth-bfc5c",
  storageBucket: "auth-bfc5c.appspot.com",
  messagingSenderId: "751510623721",
  appId: "1:751510623721:web:14ec36e99b2fe9b04ea778",
  measurementId: "G-ZJEYZ5ZX4B",
};
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
