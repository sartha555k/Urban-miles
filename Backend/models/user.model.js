const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[2 , "First name must be at least 2 characters long"],
        maxLength:[11 , "First name must be at most 11 characters long"],
    },
    lastName:{
        type:String,
        required:true,
        minLength:[2 , "Last name must be at least 2 characters long"],
        maxLength:[11 , "Last name must be at most 11 characters long"],
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        minLength:[5 , "Email must be at least 5 characters long"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , "Please enter a valid email address"],
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },

})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}

userSchema.statics.hashPassword = function(){
    return bcrypt.hash(password,10)
}

userSchema.methods.comparePassword = function(){
    const isMatch = bcrypt.compareSync(password ,this.password);
}


const userModel = mongoose.model("user" , userSchema);
module.exports = userModel;