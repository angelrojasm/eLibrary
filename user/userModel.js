const mongoose = require('mongoose')
const validator = require('validator')

//User Object Model Representation

 
const user = mongoose.model('User', {
   
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
       //Validates correct email format
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is invalid");
                
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
})

module.exports = user

