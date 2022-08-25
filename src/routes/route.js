const express = require('express');
const router = express.Router();

const productController = require("../controller/productController")
const userController = require('../controller/userController')
const orderController = require('../controller/orderController')

const midWare = require('../middleWare/midWare')

router.post('/createProduct', productController.addProduct)

router.post('/createUser', midWare.userMid,  userController.createUser)

router.post('/createOrder', midWare.userMid, orderController.createOrder)


module.exports = router;