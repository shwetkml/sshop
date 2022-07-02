import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLPIsrT10wfSMmqwGvIVSP6Xs33zrmNXI",
  authDomain: "sshop-81a84.firebaseapp.com",
  projectId: "sshop-81a84",
  storageBucket: "sshop-81a84.appspot.com",
  messagingSenderId: "1014506383926",
  appId: "1:1014506383926:web:94103e66596e5f90bb4697",
  measurementId: "G-X4JEWX3B1E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

