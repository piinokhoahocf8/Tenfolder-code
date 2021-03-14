var express = require('express')
var { register, login, forgotPassword } = require('../controllers/auth');
var router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('/forgot-password', forgotPassword);

module.exports = router;