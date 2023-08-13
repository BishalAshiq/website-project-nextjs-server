const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String },
  desc: { type: String },

  para: { type: String },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
