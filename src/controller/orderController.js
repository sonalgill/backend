const mongoose = require('mongoose')
const orderModel = require('../model/orderModel')
const userModel = require('../model/userModel')
const productModel = require('../model/productModel')


const createOrder = async function (req, res) {
    let body = req.body
    let userID = body.userId
    let proID = body.productId
    let objUser = mongoose.Types.ObjectId.isValid(userID)
    let objPro = mongoose.Types.ObjectId.isValid(proID)
    if (!objUser) { return res.send("Value of the userID should be in the correct form.") }
    if (!objPro) { return res.send("Value of the productID should be in the correct form.") }
    let userIdCheck = await userModel.findById(userID)
    let proIdCheck = await productModel.findById(proID)
    if (!userIdCheck) {
        return res.send("Not a valid user ID")
    } else if (!proIdCheck) {
        return res.send("Not a valid product ID")
    } else {
        if (req.headers.isfreeappuser == "false") {
            let proPri = proIdCheck.price
            let bal = userIdCheck.balance
            if (bal < proPri) {
                return res.send("Insufficient balance in your account to place the order.")
            } else {
                let balUpd = await userModel.findByIdAndUpdate(userID, { $inc: { balance: - proPri } })
                req.body.amount = proPri
            }
        } else {
            body.amount = 0
        }
        let crtOrder = await orderModel.create(body)
        return res.send(crtOrder)
    }
}

module.exports.createOrder = createOrder