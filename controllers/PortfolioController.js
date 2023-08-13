const Portfolio = require("../models/Portfolio");

const getAllPortfolio = async (req, res) => {
  const all_portfolio = await User.find({});
  return res.json({
    status: 200,
    all_portfolio: all_portfolio,
  });
};

module.exports = { getAllPortfolio };
