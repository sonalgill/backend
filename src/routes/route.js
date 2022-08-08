const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const welpath = require('../logger/logger') 
const cdate = require('../util/helper')
const ttrim = require('../validator/formatter')
const _ = require('lodash');
const { json } = require('body-parser');
const { indexOf } = require('lodash');


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
    let splitmonths  = _.chunk(arr, 3)
    console.log(splitmonths)

    let arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let last = _.tail(arr2)
    console.log(last)

    let array_1 = [1, 2]
    let array_2 = [2, 3, 8]
    let array_3 = [3, 6, 7]
    let array_4 = [21, 34, 43]
    let array_5 = [21, 4, 76]
    let merge = _.union(array_1, array_2, array_3, array_4, array_5)
    console.log(merge)

    let arr4 = [['horror', 'The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    let obj = _.fromPairs(arr4)
    console.log(obj)

});

router.get('/get/movies', function(req, res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movies)
})



router.get('/get-movie/:indexNumber', function(req, res){
    let moviearr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let mName = req.params.indexNumber
    if(mName >= moviearr.length){
        res.send('Please use valid index')
    }else {
        res.send(moviearr[mName])
    }
})

router.get('/get/films', function(req, res){
    let objectarr = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }
    ]
    res.send(objectarr)
})

router.get('/get/films/:filmId', function(req, res){
    let objarr =
    [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }
    ]
    
       let filmName = req.params.filmId
       for(i = 0; i < objarr.length; i++){if(filmName == objarr[i].id){
        res.send(objarr[i])
       }}  {
        res.send('No movie exists with this id')
       }      
})



router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation ')
})

router.get('/give-me-students-data',function(req, res){

})

module.exports = router;
// adding this comment for no reason