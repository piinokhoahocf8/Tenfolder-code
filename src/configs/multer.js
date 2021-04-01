const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null,'./src/uploads/')
    },   
    filename: function (req, file, cb){
        cb(null,Date.now() + '-' + file.originalname)
    }
})


const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null,true)
    }
    else {
        cb({message: 'Unspted file format'}, false)
    }
}

const upload = multer({
    storage: storage,
    limits:{filsize: 1024 * 1024},
    fileFilter:fileFilter
})

module.exports = upload;
