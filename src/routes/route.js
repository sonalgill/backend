const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const welpath = require('../logger/logger') 
const cdate = require('../util/helper')
const ttrim = require('../validator/formatter')

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
    welpath.welcome()
    cdate.date()
    cdate.month()
    cdate.batch()
    ttrim.trim()
    ttrim.lower()
    ttrim.upper()

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})

module.exports = router;
// adding this comment for no reason