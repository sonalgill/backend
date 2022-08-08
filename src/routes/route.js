const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const welpath = require('../logger/logger') 
const cdate = require('../util/helper')
const ttrim = require('../validator/formatter')
const _ = require('lodash')


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

    let arr = [ 'jan', 'feb', 'mar', 'apr','may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'  ]
    let splitmonths  = _.chunk(arr, 4)
    console.log(splitmonths)

    let arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let last = _.tail(arr2)
    console.log(last)

    let arr3 = ([1, 2], [ 2, 3])
    let merge = _.union(arr3)
    console.log(merge)

    let arr4 = [['horror', 'The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    let obj = _.fromPairs(arr4)
    console.log(obj)

router.get('/details-s', function(req, res){
    let studentDetails = ['Sonal', 'Tanuj', 'Arpit']
    res.send("fine")
})

    // router.get('/students-detail/:name', function(req, res){
    //     let reqParams = req.params
    //     let studentName = reqParams.name
    //     console.log('name is => ', studentName)
    //     let studentDetail = studentName

    //     res.send(studentDetail)
    // })


});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})

module.exports = router;
// adding this comment for no reason