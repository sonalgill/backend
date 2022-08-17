const bookModel = require("../model/bookModel")
const bookModel3 = require("../model/bookModel3")
const authorModel = require("../model/authorModel")

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


const createBookData = async function(req, res){
    let data = req.body
    let add = await bookModel3.create(data)
    res.send({BookDetails : add})
}

module.exports.createBookData = createBookData

const author = async function(req, res){
    let data = req.body
    let add = await authorModel.create(data)
    res.send({add})
}
module.exports.author = author

const getByAuthor = async function(req, res){
    let id = await authorModel.find({ author_name : "Chetan Bhagat"}).select({ author_id : 1 , _id : 0})
    let data = await bookModel3.find({ author_id : id[0].author_id})
    res.send({data})
}
module.exports.getByAuthor = getByAuthor

const updatePrice = async function(req, res){
    let priceUpd = await bookModel3.findOneAndUpdate(
        {name : "Two States"},
        {$set : { price : 100}},
        {new : true}).select({price : 1, _id : 0})
    let author = await bookModel3.find({name : "Two States"}).select({ author_id:1, _id : 0})
    let returnAuthor = await authorModel.find({author_id : author[0].author_id}).select({ author_name : 1, _id : 0})
    returnAuthor.push(priceUpd)
        res.send(returnAuthor)
}

module.exports.updatePrice = updatePrice

const priceRange = async function (req, res){
    let result = []
    let book = await bookModel3.find({ price : { $lte : 100, $gte : 50}}).select({ author_id : 1, _id : 0})
   let author = await authorModel.find().select({author_name : 1, author_id : 1 , _id :0})
   for(i = 0; i < author.length; i++){
    for(j = 0; j<book.length; j++){
        if ( author[i].author_id == book[j].author_id){
            result.push(author[i].author_name)
        }
    }
   }
    res.send(result)
}
module.exports.priceRange = priceRange
