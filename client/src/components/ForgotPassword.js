/*import React from 'react';
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');

const sendResetPasswordMail = async(name , email , token) => {
    try{

        nodemailer.createTransport({
            host : 'smtp.gmail.com',
            port : 3000,
            secure : false,
            requireTLS : true,
            auth :{
                user : config.email 
            }
        })

    } catch(err){
        Response.status(400).send({message : "ERROR"});

    }

} 

const ForgotPassword = async(req,res) => {
    try {

        const email = req.body.email;

        const userData = await user.findOne({email : email});
        if(userData) {

            const randomString = randomstring.generate();
            const data = await User.updateOne({email : email } , {$set:{token : randomString}});

            res.status(200).send('PLEASE CHECK YOUR INBOX OF MAIL AND RESET YOUR PASSWORD ! ! ! ');
            console.log(err);

        }else {
            res.status(200).send('THIS EMAIL DOES NOT EXIST ! ! ! ');
            console.log(err);

        }
    }catch(err) {
        res.status(400).send('INVALID');
        console.log(err);
    }
}


export default ForgotPassword
*/