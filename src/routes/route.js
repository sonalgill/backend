const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/sol1', function (req, res) {
    let arr = [1, 2, 3, 5, 6, 7]
    let n = arr[arr.length - 1]
    let sum = arr.reduce((ini, curr) => ini + curr)
    let missingNumber = (n * (n + 1) / 2) - sum
    res.send({ data: missingNumber })
})

router.get('/sol2', function (req, res) {
    let arr = [33, 34, 35, 37, 38]
    let n = arr.length + 1
    let last = arr[arr.length - 1]
    let sum = arr.reduce((ini, curr) => ini + curr)
    let missingNumber = (n*(arr[0] + last)/2) - sum
    res.send({data : missingNumber})
})



router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;