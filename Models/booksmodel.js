const mongoose = require("mongoose")
const { nonEmptyString, nonEmptyNumber } = require("../validator")
const bookSchema = mongoose.Schema ({
    title:{
        type:String,
        required: true,
        validate: {
            validator: nonEmptyString, message: "title cannot be empty"
        }
    },
    
    author:{
        type:String,
        required:true,
        validate: {
            validator: nonEmptyString, message: "author cannot be empty"
        }
    },

    date:{
        type:Date,
        required:true
    },

    genre:{
        type:String,
        required:true,
        validate: {
            validator: nonEmptyString, message: "genre cannot be empty"
        }
    },

    image: {
        type:String,
    }
})

const Books = mongoose.model ("Books", bookSchema)
module.exports = Books