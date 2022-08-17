const mongoose = require('mongoose')
const bookSchema3 = new mongoose.Schema({
    name: String,
    author_id: {
        type : Number,
        required:true},
    price: Number,
    ratings: Number,
})

module.exports = mongoose.model('Book-3', bookSchema3)