var express = require('express')
var {createComment, getMyComments} = require('../controllers/comment');
var isAuth = require('../middlewares/isAuth');
var router = express.Router();

router.post('/', isAuth, createComment);

router.get('/mycomment', isAuth, getMyComments);

module.exports = router; 