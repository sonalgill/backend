const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String },
    balance: { type: Number , default: 100},
    address: { type: String },
    age: { type: Number },
    gender: { type: String, enum: [ "male", "female", "other"]},
    isFreeAppUser: { type: Boolean, default: false}
})

module.exports = mongoose.model('userMW', userSchema)
