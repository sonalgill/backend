const mongoose = require('mongoose')
const objID = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name : {type : String},
    author: {
        type: objID,
        ref: "AuthorNew"
    },
    price: {type : Number},
    ratings: {type : Number},
    publisher: {
        type: objID,
        ref: "publisherNew"
    },
    isHardCover : {
        type : Boolean,
        default : false
    }

})

module.exports = mongoose.model('bookNew', bookSchema)