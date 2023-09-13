const express = require('express');

const authController = require('../controllers/auth')

const router = express.Router();
     
//GET
router.get('/register', authController.getRegisterPage)
router.get('/login', authController.getLoginPage)

//POST
router.post('/register', authController.register)
router.post('/login', authController.login)


//PUT

module.exports = router;