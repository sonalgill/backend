const userModel = require('../model/userModel')


const userDetails = async function (req, res) {
    let userId = req.params.userId
    let getDetails = await userModel.findById(userId)
    res.send(getDetails)
}

module.exports.userDetails = userDetails