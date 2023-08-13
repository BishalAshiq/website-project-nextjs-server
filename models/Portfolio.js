const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: { type: String },
  desc: { type: String },

  imgUrl: { type: String },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
