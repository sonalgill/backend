const publisherModel = require("../model/publisherModel")

const addPublisher = async function (req, res) {
    let add = req.body
    let data = await publisherModel.create(add)
    res.send(data)
}

module.exports.addPublisher = addPublisher

const updP = async function (req, res) {
    let data = await publisherModel.updateMany(
        { name: "Saraswati" },
        { $set: { name: "Saraswati House" } })
    res.send(data)
}
module.exports.updP = updP