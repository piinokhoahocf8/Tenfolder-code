var express = require("express");
var {
  createPost,
  getAllPosts,
  getPostById,
  getPostComments,
} = require("../controllers/post");
var isAuth = require("../middlewares/isAuth");
var router = express.Router();

router.post("/", isAuth, createPost);
router.get("/", getAllPosts);
router.get("/:id/comments", getPostComments);
router.get("/:id", getPostById);

module.exports = router;
