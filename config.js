const firebase = require('firebase/app');
require('firebase/auth') ;

const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
}

const app = firebase.initializeApp(config);

// module.export.auth = firebase.auth();

// module.export.firebase;