import firebase from "firebase";
// eslint-disable-next-line
import firestore from "firebase/firestore";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCV3suWzPgirqIV_2ABGj_kC98doTiHPms",
  authDomain: "smoothies-8acc0.firebaseapp.com",
  databaseURL: "https://smoothies-8acc0.firebaseio.com",
  projectId: "smoothies-8acc0",
  storageBucket: "smoothies-8acc0.appspot.com",
  messagingSenderId: "1007499269344"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
