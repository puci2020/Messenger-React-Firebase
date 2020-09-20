import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDqauWWUw9VsCDHl-ooOgx9iTkm7UtxdAM",
    authDomain: "messenger-8c286.firebaseapp.com",
    databaseURL: "https://messenger-8c286.firebaseio.com",
    projectId: "messenger-8c286",
    storageBucket: "messenger-8c286.appspot.com",
    messagingSenderId: "395732823006",
    appId: "1:395732823006:web:3c831ba9a546c768ec4b4f",
    measurementId: "G-J9HWRZ3SWN"
});

const db = firebaseConfig.firestore();

export default db;
