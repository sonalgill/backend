const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    authorName: { type: String },
    age: { type: Number },
    address: { type: String },
    rating: { type: Number }
})

module.exports = mongoose.model('AuthorNew', authorSchema)