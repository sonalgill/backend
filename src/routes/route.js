const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const bookController = require('../controller/bookController')

router.post('/add-book', bookController.addBook)
router.get('/getBookList', bookController.bookList)



let players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "rajeev",
        "dob": "2/4/1999",
        "gender": "male",
        "city": "agra",
        "sports": [
            "cricket"
        ]
    },
    {
        "name": "neha",
        "dob": "9/8/2000",
        "gender": "female",
        "city": "jaipur",
        "sports": [
            "football"
        ]
    }

];

router.post('/player', function (req, res) {
    let add = req.body
    let playerPresent = false

    for (i = 0; i < players.length; i++) {
        if (players[i].name == req.body.name) {
            playerPresent = true
            break;
        }
    }
    if (playerPresent) {
        res.send("player already present")
    } else {
        players.push(add)
        res.send(players)
    }
})

let bookingArr = []

router.post('/players/:playerName/booking/:bookingID', function (req, res) {
    let name = req.params.playerName
    let bID = req.params.bookingID
    let booking = req.body
    let playerPresent = false
    let bookingPresent = false
    for (i = 0; i < players.length; i++) {
        if (name == players[i].name) {
            playerPresent = true

        }
    }
    if (!playerPresent) {
        res.send("no such person exist")
    } else {
        for (j = 0; j < bookingArr.length; j++) {
            if (bID == bookingArr[j].bookingID) {
                bookingPresent = true
            }
        }
        if (bookingPresent) {
            res.send("booking already done")
        } else {
            booking.Name = name
            booking.bookingID = bID
            bookingArr.push(booking)
            res.send(bookingArr)

        }
    }
})



let votingArr = [
    { name: "Sonal", age: 10, votingStatus: false },
    { name: "Shub", age: 40, votingStatus: false },
    { name: "Arpit", age: 20, votingStatus: false },
    { name: "Rohan", age: 70, votingStatus: false },
    { name: "Tanuj", age: 5, votingStatus: false }
]


router.post('/voting', function (req, res) {
    let list = req.query.votingAge
    let newArr = votingArr.filter(eligible => eligible.age > list)
    newArr.map(i => i.votingStatus = true)
    res.send(newArr)
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