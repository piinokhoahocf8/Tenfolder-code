var express = require('express')
var {createPost} = require('../controllers/post');
var isAuth = require('../middlewares/isAuth');
var router = express.Router();

router.post('/', isAuth, createPost);

//router.put('/comment', )

module.exports = router; 