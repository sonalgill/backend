const userMid = function(req, res, next){
    let isFreeHeader = req.headers.isfreeappuser
    if(!isFreeHeader){
        res.send("Request is missing a mandatory header.")
    }
    else{
       req.body.isFreeAppUser = isFreeHeader
        next()
    }
}

module.exports.userMid = userMid

