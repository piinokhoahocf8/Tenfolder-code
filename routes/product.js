const express = require('express')

const controller = require('../controllers/product');

const router = express.Router()

router.get('/', controller.getAllProducts);
router.get('/:id', controller.getOneProduct);

module.exports = router;