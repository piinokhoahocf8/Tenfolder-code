var express = require('express')
var { getMe, changeInformation, changePassword } = require('../controllers/user');
var isAuth = require('../middlewares/isAuth')
var router = express.Router();

router.get('/me', isAuth, getMe);

router.put('/change-information', isAuth, changeInformation);

router.put('/change-password', isAuth, changePassword);

module.exports = router; 