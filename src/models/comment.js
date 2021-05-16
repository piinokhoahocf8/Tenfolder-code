const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },

    text: {
      type: String,
      require: true,
    },

    rating: {
      type: Number,
      require: true,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", schema);
