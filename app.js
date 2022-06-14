// import
const express = require('express');
const cors = require('cors');
require('./config')
const {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth')
const {checkUser} = require('./middlewares/authMiddlewares')

// app instance
const app = express();

const auth = getAuth();

// middleware

// express json middleware for handling request in json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware for handling CORS request
app.use(cors());

// port config

const PORT = process.env.PORT || 9000;

console.log("Starting backend express server");
// listening to port for running backend server
app.listen(PORT, ()=> { console.log(`Server started at port ${PORT}`)});


// routes

// home route
app.get('/', (req, res)=> {
    res.send("Hi, I am Salt Backend are you up for development fun!!");
});


// route for github login controllers
app.post('/signup', async (req, res)=>{
    try {
        const {email , password} = req.body;
        const loginUser = await createUserWithEmailAndPassword(auth,email, password);
        // console.log(loginUser.user.accessToken);
        res.json({
            token : loginUser.user.accessToken
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/signin',async (req, res)=>{
    try {
        const {email , password} = req.body;
        const loginUser = await signInWithEmailAndPassword(auth,email, password);
        // console.log(loginUser.user.accessToken);
        res.json({
            token : loginUser.user.accessToken
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Authentication Middleware
app.use(checkUser)
// utility Routes for profile
app.get('/api', (req, res)=>{
    try {
        res.json({message: 'Hi'})
    } catch (error) {
        res.json({ error: error.message})
    }
})