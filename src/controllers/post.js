const Post = require("../models/post");
const Comment = require("../models/comment");
const Response = require("../helpers/response");

module.exports.createPost = async (req, res, next) => {
  var data = { ...req.body, user: req.user };

  console.log(data);

  var post = await Post.create(data);

  Response.success({
    res,
    code: 201,
    data: post,
  });
};

module.exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    Response.success({
      res,
      data: {
        posts,
      },
    });
  } catch (e) {
    next(e);
  }

  const result = await Post.find;
};

module.exports.getPostById = async (req, res, next) => {
  try {
    const postById = await Post.findOne({ _id: req.params.id })
      .populate({ path: "category", select: "name" })
      .populate({
        path: "user",
        select: "name",
      });

    Response.success({
      res,
      data: {
        postById,
      },
    });
  } catch (e) {
    next(e);
  }
  const result = await Post.find;
};

exports.getPostComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ post: req.params.id }).populate({
      path: "user",
      select: "name avatar",
    });
    Response.success({
      res,
      data: {
        comments,
      },
    });
  } catch (e) {
    next(e);
  }
};
