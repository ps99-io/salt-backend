const firebase = require('firebase/app');
require('firebase/auth') ;

const config = {
    apiKey: "AIzaSyCPGLg-gRL5U2fdIvHUu7Kct8WOM9XP4dA",
    authDomain: "user-auth-bda88.firebaseapp.com",
    projectId: "user-auth-bda88",
    storageBucket: "user-auth-bda88.appspot.com",
    messagingSenderId: "504464780170",
    appId: "1:504464780170:web:7ec3672551fd05f51f7673"
}

const app = firebase.initializeApp(config);

// module.export.auth = firebase.auth();

// module.export.firebase;