
const admin = require("firebase-admin");
const serviceAccount = require("../acc.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  //   databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});


const checkUser = async (req, res,next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            const authToken = req.headers.authorization.split(' ')[1];
            const token = await 
            admin
            .auth().verifyIdToken(authToken);
            console.log(token);
            console.log(token.uid);
            req.tokenID = token.uid;
            next();
          } else {
            res.status(401).json({ error: "Auth failed" });
          }
    } catch (error) {
        res.status(401).json({ error: "Auth failed" });
    }
};

module.exports = {
    checkUser
};