const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true
    },
    authorName: String,
    category: {
        type: String,
        enum: ["drama", "thriller", "tragedy", "comic", "play"]
    },
    year: Number
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)

const bookSchema2 = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: String,
    price: {IndianPrice: Number, 
        EuropeanPrice : Number},
    year: {
        type: Number,
        default: 2021
    },
    tags: [String],
    totalPages: Number,
    stockAvailable: Boolean
}, { timestamps: true })

module.exports = mongoose.model('Book-2', bookSchema2)