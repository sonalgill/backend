const mongoose = require('mongoose')
const orderModel = require('../model/orderModel')
const userModel = require('../model/userModel')
const productModel = require('../model/productModel')



const createOrder = async function (req, res) {
    let body = req.body
    let headerCheck = req.headers.isfreeappuser
    console.log(headerCheck)
    let userID = body.userId
    let isValid = mongoose.Types.ObjectId.isValid(userID)
    let proID = body.productId
    let userIdCheck = await userModel.findById(userID)
    let proIdCheck = await productModel.findById(proID)
    if (!userID) {
        return res.send("Not a valid user ID")
    } else if (!proIdCheck) {
        return res.send("Not a valid product ID")
    }else {
        if(body.isFreeAppUser == false){
            let proPri = proIdCheck.price
            let bal = userIdCheck.balance
            if(bal < proPri){
                return res.send("Insufficient balance in your account to place the order.")
            }else{ let balUpd = await userModel.findByIdAndUpdate( userID, { balance : bal - proPri }) }
        }
        let crtOrder = await orderModel.create(body)
        return res.send(crtOrder)
    }
}

module.exports.createOrder = createOrder