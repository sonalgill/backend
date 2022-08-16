const bookModel = require("../model/bookModel")

const addBook = async function (req, res) {
    let data = req.body
    let newBook = await bookModel.create(data)
    res.send({ BookDetails: newBook })
}

const bookList = async function (req, res) {
    let allBooks = await bookModel.find({ authorName: "agatha christie" })
    res.send({ BookList: allBooks })
}

module.exports.addBook = addBook
module.exports.bookList = bookList


const createBook = async function (req, res) {
    let data = req.body
    let addData = await bookModel.create(data)
    res.send({ Books: addData })
}
const allBooks = async function (req, res) {
    let allData = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ List: allData })
}
const byYear = async function (req, res) {
    let year = req.body.year
     let data = await bookModel.find({ year: year })
     res.send(data)
 }
 const particularBook = async function (req, res) {
    let body = req.body
    let data = await bookModel.find(body)
    res.send(data)
}
const byINR = async function (req, res) {
    let data = await bookModel.find( { "price.IndianPrice"  : { $in : [100, 200, 500]}})
    res.send(data)
}
const randomBooks = async function (req, res) {
    let data = await bookModel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] })
    res.send(data)
}

module.exports.createBook = createBook
module.exports.allBooks = allBooks
module.exports.byYear = byYear
module.exports.particularBook = particularBook
module.exports.byINR = byINR
module.exports.randomBooks = randomBooks