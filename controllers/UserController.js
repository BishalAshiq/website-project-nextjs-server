const User = require("../models/User");

const getAllUser = async (req, res) => {
  const all_users = await User.find({});
  return res.json({
    status: 200,
    all_users: all_users,
  });
};

module.exports = { getAllUser };
