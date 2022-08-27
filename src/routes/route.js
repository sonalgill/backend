const express = require('express');
const router = express.Router();

const userController = require('../controller/userController')
const loginController = require('../controller/loginController')
const userDetailsController = require("../controller/userDetails")
const updateDetails = require('../controller/updateDetails')
const deleteDetails = require('../controller/deleteUser')


const midWare = require('../middleWare/auth')

router.post('/registerUser', userController.createUser)
router.post('/userLogin', loginController.loginUser)
router.get('/users/:userId', midWare.midWare1, userDetailsController.userDetails)
router.put('/updateDetails/:userId', midWare.midWare1, updateDetails.updateDetails)
router.delete('/deleteDetails/:userId',  midWare.midWare1, deleteDetails.deleteDetails)


module.exports = router;