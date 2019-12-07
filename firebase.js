const firebase = require('firebase');
const firebaseConfig = require('firebaseConfig');
const database = firebase.database;
const ref = database.ref;

firebase.initializeApp(firebaseConfig);