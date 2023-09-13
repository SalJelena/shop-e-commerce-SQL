const express = require('express');

const { registerValidator } = require('../validators/registerValidator');
const { loginValidator } = require('../validators/loginValidator');
const { authController } = require('../controllers/auth');

const router = express.Router();
     
//GET
router.get('/register',  authController.getRegisterPage)
router.get('/login', authController.getLoginPage)

//POST
router.post('/register', registerValidator, authController.register)
router.post('/login', loginValidator, authController.login)


//PUT

module.exports = router;