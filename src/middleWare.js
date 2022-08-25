const moment = require('moment');

const midW = function (req, res, next) {
    let timeStamp = moment().format('MMMM Do YYYY, h:mm:ss a')
    console.log(timeStamp, req.ip, req.path)
    next()
}

module.exports.midW = midW