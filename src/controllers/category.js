const Category = require("../models/category");
const Post = require("../models/post");
const Response = require("../helpers/response");

module.exports.createCategory = async (req, res, next) => {
  try {
    var name = req.body.name;
    var category = await Category.create({ name });

    Response.success({
      res,
      code: 201,
      data: {
        category,
      },
    });
  } catch (e) {
    next(e);
  }
};

module.exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    Response.success({
      res,
      data: {
        categories,
      },
    });
  } catch (e) {
    next(e);
  }
};

exports.getPostsByCategory = async (req, res, next) => {
  try {
    const posts = await Post.find({ category: req.params.id })
      .populate({ path: "category", select: "name" })
      .populate({
        path: "user",
        select: "name",
      });

    Response.success({
      res,
      data: {
        posts,
      },
    });
  } catch (e) {
    next(e);
  }
};
