const userModel = require('../model/userModel')


const updateDetails = async function (req, res) {
    let add = req.body
    let update = await userModel.findByIdAndUpdate({ _id: userId }, add, { new: true })
    res.send(update)
}

module.exports.updateDetails = updateDetails