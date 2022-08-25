const mongoose = require('mongoose')
const objID = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
        type: objID,
        ref: "userMW"
    },
    productId: {
        type: objID,
        ref: "product"
    },
    amount: { type: Number},
    isFreeAppUser : { type : Boolean},
    date: {type: String}
})

module.exports = mongoose.model('order', orderSchema)
