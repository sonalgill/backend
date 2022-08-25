const productModel = require("../model/productModel")

const addProduct = async function (req, res) {
    let add = req.body
    let {price} = add
    if(!price){ return res.send("price is required")}
    let data = await productModel.create(add)
    res.send(data)
}

module.exports.addProduct = addProduct
