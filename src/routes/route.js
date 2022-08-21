const express = require('express');
const router = express.Router();
const authorController = require("../controller/authorController");
const bookController = require("../controller/bookController");
const publisherController = require("../controller/publisherController")



router.post('/createAuthor', authorController.addAuthor)
router.post('/addBook', bookController.addBook)
router.post('/addPublisher', publisherController.addPublisher)

router.get('/allData', bookController.allData)

router.get('/updateCover', bookController.updateCover)
router.get('/updatePrice', bookController.updatePrice)

router.get('/demo', publisherController.updP)

module.exports = router;