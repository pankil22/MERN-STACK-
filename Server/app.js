const dotenv = require(`dotenv`);

const mongoose = require('mongoose');

const express = require('express');
const app = express(); // IN THIS APP IT IS CONATINING ALLL THE METHODS OF EXPRESS

dotenv.config({ path:'./config.env'});
require('./db/conn');

app.use(express.json());
// WE ARE LINKING THE ROUTER FILES TO MAKE OUR ROUTE EASY 
app.use(require('./router/auth'));

//const User = require('./model/userSchema');

// NOW WE ARE CONNECTION THIS FILE WITH THE DATABSE 
const PORT = process.env.PORT;


// MIDDLEWARE   

//const middleware = (req, res, next) => {
    //console.log("HELLO MY MIDDLE WARE ");
    //next();
//}

//app.get('/' , (req , res) =>  {
    // console.log(`HELLO MY ABOUT`);
//    res.send(`HELLO WORLD FROM THE SERVER from app . js`);
// } );

//app.get('/about' ,(req , res) =>  {
//    res.send(`HELLO ABOUT WORLD FROM THE SERVER`);
// } );

app.get('/contact' , (req , res) =>  {
    res.send(`HELLO CONTACT WORLD FROM THE SERVER`);
} );

app.get('/signin' , (req , res) =>  {
    res.send(`HELLO LOGIN WORLD FROM THE SERVER`);
} );

app.get('/signup' , (req , res) =>  {
    res.send(`HELLO REGISTRATION WORLD FROM THE SERVER`);
} );

app.listen(PORT , () => {
    console.log(`NOW SERVER IS RUNNING AT PORT NUMBER ${PORT}`);
})