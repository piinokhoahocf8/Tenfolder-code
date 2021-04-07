const Comment = require('../models/comment')
var Response = require('../helpers/response')
var Post = require('../models/post')

module.exports.createComment = async (req, res, next) => {
    try{
    var data = { ...req.body, user: req.user }
    var postId = data.post;
    const post = await Post.findById(postId)
    if (!post) {
        Response.error({ res, code: 400, message: 'Post khong ton tai' })
        return 
    }
    console.log(data)

    var comment = await Comment.create(data);

    Response.success({
        res,
        code: 201,
        data: comment
    })}
    catch (e) {
        next(e)
    }
}


module.exports.getMyComments = async (req, res, next) => {
    const comments = await Comment.find({user: req.user});
     Response.success({
         res,
         data: comments
     })
}
