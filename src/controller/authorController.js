const authorModel = require("../model/authorModel")

const addAuthor = async function(req, res){
    let data = req.body
    let add = await authorModel.create(data)
    res.send(add)
}

module.exports.addAuthor = addAuthor