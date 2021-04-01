const Post = require('../models/post')
var Response = require('../helpers/response')

module.exports.createPost = async (req, res, next) => {
    var data = { ...req.body, user: req.user }
    
    console.log(data)

    var post = await Post.create(data);

    Response.success({
        res,
        code: 201,
        data: post
    })
}