const mongooose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    resetLink: {
        data: String,
        default: ''
    },
    tokens : [
        {
            token : {
                type: String,
                required: true
            }
        }
    ]
})


// NOW WE AE HASHING THE PASSWORD 
userSchema.pre('save', async function (next)    {
    console.log("HI FROM INSIDE");
    if(this.isModified('password')){

        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);

    }
    next(); 
});

// WE ARE GENERATING TOKEN 
    userSchema.methods.generateAuthToken = async function(){
        try{
            let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
            this.tokens = this.tokens.concat({ token : token });
            await this.save();
            return token;
        } catch(err){
            console.log(err);
        }
    }

 //COLLECTION CREATION 
const User = mongooose.model('USER', userSchema);

module.exports = User;
