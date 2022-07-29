
const jwt = require('jsonwebtoken');

const express = require('express');

const router = express.Router();

const bcrypt = require('bcryptjs');

const authenticate = require("../middleware/authenticate");

const _ = require('lodash');

const mailgun = require("mailgun-js");

const DOMAIN = 'sandbox8f64ea9f4a424b56ae30fa6dacece487.mailgun.org';

const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });

const moment = require('moment');

//const { check , validationResult } = require('express-validator');

//const verifyToken = require('./../middleware/authenticate');



// const { Validator } = require('node-input-validator');





require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`HELLO WORLD FROM THE SERVER router js`);
});

// USING PROMISES -----> THIS IS ALSO VALID APPROACH BUT WE WILL PREFER ASYNC APPROACH 

/* 
router.post('/register', (req,res) => {
    const { name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error : "PLEASE FILLED THE FIELD PROPERLY" });
    }

    User.findOne({ email : email })
    .then((userExist) => {
        if (userExist){
            return res.status(422).json({error : "EMAIL ALREADY EXIST !!!"}); 
        }

        const user = new User({ name, email, phone, work, password, cpassword});

        user.save().then(() => {
            res.status(201).json({ message : "USER REGISTERED SUCCESSFULLY"});
        }).catch((err) => res.status(500).json({eroor : "FAILED TO REGISTERED"}));
    }).catch(err => { console.log(err); });

*/

// USING ASYNC APPROACH 
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "PLEASE FILLED THE FIELD PROPERLY" });
    }

    try {

        const userExist = await User.findOne({ email: email })



        if (userExist) {
            return res.status(422).json({ error: "EMAIL ALREADY EXIST !!!" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "PASSWORD ARE NOT MATCHING " });

        } else {
            const user = new User({ name, email, phone, work, password, cpassword });

            await user.save();

            res.status(201).json({ message: "USER REGISTERED SUCCESSFULLY" });
        }



    } catch (err) {
        console.log(err);
    }


    //  console.log(name);
    // console.log(email);
    //res.json({message : req.body});
    //res.send('MERA REGISTRAR PAGE');
});

// LOGIN ROUTE 

router.post('/signin', async (req, res) => {
    //console.log(req.body);
    //res.json({message : "AWESOME !!!"});
    let token;

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "PLEASE FILL THE DATA PROPERLY " });
        }

        const userLogin = await User.findOne({ email: email });  //   IF THE MATCH IS FOUNBD THEN WE WILL GET THE WHOLE DETAILS OF THE USER AND WE WILL HET ONLY ONE 

        //console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000), // THIS MEANS THAT AFTER 30 DAYS USER TOKEN WILL BE EXPIRED 
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "INVALID CREDENTIALS " });
            } else {
                res.json({ message: "USER SIGIN SUCCESSFULLY" });
            }

        } else {
            res.status(400).json({ error: "INVALID CREDENTIALS " });
        }

    } catch (err) {
        console.log(err);
    }

});

// about us kai page 
router.get('/about', authenticate, (req, res) => {
    console.log(`HELLO MY ABOUT`);
    res.send(`HELLO WORLD FROM THE SERVER from app . js`);
    //res.send(req.rootUser);
});


// Logout kai page 
router.get('/logout', (req, res) => {
    console.log(`HELLO MY LOGOUT PAGE`);
    res.clearCookie('jwtoken', { path: '/' })
    res.status(200).send('User Logout');
});

// FORGOT PASSSWORD KAI PAGE BASICALLY 
router.put('/reset-password', (req, res) => {

    const { email } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: "USER WITH THIS EMAIL DOES NOT EXIST .." });
        }
        const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: "20m" });
        const data = {
            from: 'noreply@hello.com',
            to: user.email,
            subject: 'RESET LINK',
            html: ` 
            <h2> PLEASE CLICK ON THE LINK TO RESET THE PASSWORD </h2>
            <p>${process.env.CLIENT_URL}/resetpassowrd/${token}</p>
            `
        };

        return user.updateOne({ resetLink: token }, function (err, success) {
            if (err) {
                return res.status(400).json({ error: "RESET PASSWORD LINK ERROR" });
            } else {
                mg.messages().send(data, function (error, body) {
                    if (error) {
                        return res.status(400).json({ error: "SOME ERROR" });
                    }
                    return res.json({ message: 'EMAIL HAS BEEN SEND AND  KINDLY FOLLOW THE INSTRUCTIONS !!!!' });
                });

            }
        })
    })

})


// NOW WE WILL DO RESET PASSWORD KAI PAGE ON BACKEND BASICALLY ON POSTMAN 
router.put('/new-password', (req, res) => {
    //const link = document.location.href;
    //console.log(req.CLIENT_URL);
    const { resetLink, newPass } = req.body;
    //console.log(req)
    //console.log(resetLink)
    //console.log(newPass);
    if (resetLink) {
        console.log('HI THERE nisha')
        jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY, function (error, decodedData) {
            if (error) {
                return res.status(401).json({ error: "INCORRECT TOKEN  OR IT IS EXPIRED !!!!" })

            }

            User.findOne({ resetLink }, (err, user) => {
                if (err || !user) {
                    return res.status(400).json({ error: "USER WITH THIS TOKEN DOES NOT EXIST !!!!" });
                }
                const obj = {
                    password: newPass,
                    resetLink: '' // THIS RESET LINK IS EMPTY BECUASE IF WE WANT TO AGAIN CHANGE THE PASSWORD THEN WE HAVE TO AGAIN NEED A FORGOT PASSWROD LINK 

                }

                user = _.extend(user, obj);
                user.save((err, result) => {
                    if (err) {
                        return res.status(400).json({ error: "RESET PASSWORD ERROR IN RESET PASSWORD" });
                    } else {
                        return res.status(200).json({ message: "YOUR PASSWORD HAS BEEN CHANGED " });

                    }
                })
            })
        })
    } else {
        return res.status(401).json({ error: "AUTHENTICATION ERROR !!!!!!" });
    }
})



module.exports = router; 
