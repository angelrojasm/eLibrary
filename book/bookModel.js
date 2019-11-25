
const mongoose = require('mongoose')

//Book Object Model Representation

const book = mongoose.model('Book', {
    name: {
        type: String,
        required: true,
        trim: true

    },
    author: {
        type: String,
        trim: true
    },

    description: {
        type: String
    },
//Length in pages (future sorting?)
    length: {
        type: Number,
        required: true,
        validate(value) {
            if( value <=0) {
                throw new Error("Length can not be less than 1.")
            }
        }
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})



module.exports = book;
