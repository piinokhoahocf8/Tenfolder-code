var express = require("express");
var {
  createCategory,
  getAllCategories,
  getPostsByCategory,
} = require("../controllers/category");
var router = express.Router();

router.post("/", createCategory);
router.get("/:id/posts", getPostsByCategory);
router.get("/", getAllCategories);

module.exports = router;
