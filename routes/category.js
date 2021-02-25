const express = require('express')

const controller = require('../controllers/category');

const router = express.Router()

router.get('/', controller.getAllCategories);
router.get('/:id/products', controller.getProducts);

module.exports = router;