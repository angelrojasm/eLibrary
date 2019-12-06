const mongoose = require('mongoose');
const validator = require('validator');

//Define a schema

const UserSchema = new mongoose.Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 email: {
  type: String,
  trim: true,
  required: true,
  validate(value) {
    if(!validator.isEmail(value)) {
        throw new Error("Email is invalid");
    }
}

 },
 password: {
  type: String,
  trim: true,
  required: true
 },

 Rank: {
    type: String,
    enum : ['User', 'Admin'],
    default: 'User'
 }
});
// hash user password before saving into database
UserSchema.pre('save', function(next){
next();
});
module.exports = mongoose.model('User', UserSchema);