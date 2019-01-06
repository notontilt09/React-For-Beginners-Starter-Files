import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCiU4e6hfKg796WfE1XWUqa9eJFJq3wlRY",
    authDomain: "catch-of-the-day-dan-weinman.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-dan-weinman.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;