var express = require('express')
var {createCategory, getAllCategories} = require('../controllers/category');
var router = express.Router();

router.post('/', createCategory);

router.get('/', getAllCategories);

module.exports = router; 