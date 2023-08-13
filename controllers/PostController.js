const Post = require("../models/Post");

const getAllPost = async (req, res) => {
  const all_posts = await Post.find({});
  return res.json({
    status: 200,
    all_posts: all_posts,
  });
};

module.exports = { getAllPost };
