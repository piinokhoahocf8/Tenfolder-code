var uploader = require('../configs/cloudinary');
var fs = require('fs');

module.exports.uploadMultiple = async (req, res, next) => {
    const urls = [];
    const files = req.files;

    for (const file of files) {
      var path = file.path;

      // duong dan anh
      const newPath = await uploader(path)

      urls.push(newPath)

      // xoa file anh tren source code
      fs.unlinkSync(path)
    }

    res.status(200).json({
      message: 'hnh tải thành công',
      data: urls
    })    
};