var express = require('express')
var { uploadMultiple } = require('../controllers/upload');
var upload = require('../configs/multer')
var isAuth = require('../middlewares/isAuth');
var router = express.Router();


// upload/multiple
router.post('/multiple', isAuth, upload.array('image') , uploadMultiple);

module.exports = router; 