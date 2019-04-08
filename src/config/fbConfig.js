import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyD0wbwhRQtGBNAThsN3QdBHP4Fiui9UL_M",
  authDomain: "react-firebase-42bc2.firebaseapp.com",
  databaseURL: "https://react-firebase-42bc2.firebaseio.com",
  projectId: "react-firebase-42bc2",
  storageBucket: "react-firebase-42bc2.appspot.com",
  messagingSenderId: "437369143235"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
