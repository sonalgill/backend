const { default: mongoose } = require("mongoose")
const authorModel = require("../model/authorModel")
const bookModel = require("../model/bookModel")
const publisherModel = require("../model/publisherModel")

const addBook = async function (req, res) {
    let data = req.body
    let author = req.body.author
    let publisher = req.body.publisher
    let authorid = await authorModel.find({ _id: author })
    let publisherid = await publisherModel.find({ _id: publisher })
    if (!author) {
        res.send("Author ID is required.")
    }
    else if (!authorid.length) {
        res.send("Not a valid author ID.")
    }
    else if (!publisher) {
        res.send("Publisher ID is required.")
    }
    else if (!publisherid.length) {
        res.send("Not a valid publisher ID.")
    }
    else {
        let book = await bookModel.create(data)
        res.send(book)
    }
}

module.exports.addBook = addBook


const allData = async function (req, res) {
    let data = await bookModel.find().populate('author').populate('publisher')
    res.send(data)
}

module.exports.allData = allData

const updateCover = async function (req, res) {
    let pID = await publisherModel.find({ name: { $in: ["Penguin", "Harper Collins"] } }).select({ _id: 1 })
    let data = await bookModel.updateMany(
        { publisher: pID.map(element => element) },
        { $set: { isHardCover: true } },
        { upsert: true }
    )
    res.send(data)
}
module.exports.updateCover = updateCover

const updatePrice = async function (req, res) {
    let aID = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let arr = []
    aID.map(a => { arr.push(a._id) })
    let data = await bookModel.updateMany({author: [...arr]}, {$inc: {price: 5}})
    res.send(data)
}
module.exports.updatePrice = updatePrice
