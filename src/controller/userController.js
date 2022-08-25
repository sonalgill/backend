const { default: mongoose } = require("mongoose")
const userModel = require("../model/userModel")

const createUser = async function (req, res){
    let add = req.body
    let data = await userModel.create(add)
    res.send(data)
}

module.exports.createUser = createUser
