const Post = require("../models/post");
var Response = require("../helpers/response");

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
    const postById = await Post.findOne({ _id: req.params.id });

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
