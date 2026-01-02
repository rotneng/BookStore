const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { nonEmptyString, nonEmptyNumber } = require("../validator")

const signupSchema = mongoose.Schema({
    name:{
        type:String,
        rquired:true,
        validate: {
            validator: nonEmptyString, message: "name cannot be empty"
        }
    },

    userName:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: nonEmptyString, message: "Username cannot be empty"
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: nonEmptyString, message: "email cannot be empty"
        }
    },
    phoneNumber:{
        type:Number,
        unique:true,
        validate: {
            validator: nonEmptyNumber, message: "PhoneNumber cannot be empty"
        }
    },
    password:{
        type:String,
        required:true,
        validate: {
            validator: nonEmptyString, message: "password cannot be empty"
        }
    },
    isVerified:{
        type:String,
        required:true,
        default:"false",
    }, 
    date:{
        type:Date,
        default:Date.now
    },
    profileImage:{
        type:String,
    }
})

signupSchema.methods = {
    authenticate:async function(userPassword){
        return await bcrypt.compare (userPassword, this.password)
    }
}
const User = mongoose.model("User", signupSchema)
module.exports = User