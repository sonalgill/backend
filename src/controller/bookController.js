const bookModel = require("../model/bookModel")

const addBook = async function (req, res) {
    let data = req.body
    let newBook = await bookModel.create(data)
    res.send({ BookDetails : newBook })
}

const bookList = async function (req, res) {
    let allBooks = await bookModel.find()
    res.send({ BookList : allBooks })
}

module.exports.addBook = addBook
module.exports.bookList = bookList
