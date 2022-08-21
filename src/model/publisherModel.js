const mongoose = require('mongoose')

const publisherSchema = new mongoose.Schema({
    name: {type : String},
    headQuarter: {type : String},
})

module.exports = mongoose.model('publisherNew', publisherSchema)