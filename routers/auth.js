const express = require('express');
const router = express.Router();
const authenticate = require("../middlewares/authenticate");


const authController = require('../controllers/auth');
const { checkSchema } = require('express-validator');
const userRegister = require('../validations/userRegister');
const userLogin = require("../validations/userLogin");

router.post('/register',checkSchema(userRegister), authController.register);
router.post('/login', checkSchema(userLogin), authController.login);

router.get('/me', authenticate, authController.me), 

module.exports = router;