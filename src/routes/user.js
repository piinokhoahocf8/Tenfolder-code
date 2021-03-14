// 1 => Lay thong tin user 
// 2 => Thay doi thong tin user => findOneAndUpdate({_id: ''}, { name: 'Khoi', age: 30 })
// 3 => Doi mat khau user

var express = require('express')
var { getMe, changeInformation, changePassword } = require('../controllers/user');
var isAuth = require('../middlewares/isAuth')
var router = express.Router();

router.get('/me', isAuth, getMe);

router.put('/change-information', isAuth, changeInformation);

router.post('/changepassword', isAuth, changePassword)

module.exports = router;