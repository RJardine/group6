import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyC-2djS6iteoGXmfSWqroyGgct3fE1lZZ4",
  authDomain: "group6-3175f.firebaseapp.com",
  databaseURL: "https://group6-3175f.firebaseio.com",
  projectId: "group6-3175f",
  storageBucket: "group6-3175f.appspot.com",
  messagingSenderId: "819202564054"
};
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
