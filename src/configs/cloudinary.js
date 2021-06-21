var cloudinary = require("cloudinary");
require("dotenv").config();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const uploader = async (path) => await cloudinary.uploader.upload(path);

module.exports = uploader;
