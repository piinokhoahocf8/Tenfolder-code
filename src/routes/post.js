var express = require('express')
var {createPost, getAllPosts, getPostById} = require('../controllers/post');
var isAuth = require('../middlewares/isAuth');
var router = express.Router();

router.post('/', isAuth, createPost);

router.get('/', getAllPosts);

router.get('/:id', getPostById);

module.exports = router; 