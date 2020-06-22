import * as firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: process.env.MIX_REACT_APP_FIREBASE_KEY,
    authDomain: process.env.MIX_REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.MIX_REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.MIX_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.MIX_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.MIX_REACT_APP_FIREBASE_SENDER_ID,
});

export default app