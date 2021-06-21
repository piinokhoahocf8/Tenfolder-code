const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    avatar: String,
    resetLink: {
      data: String,
      default: "",
    },
    dayOfBirth: {
      type: Date,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", schema);
