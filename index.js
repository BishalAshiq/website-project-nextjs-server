const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const Post = require("./models/Post");
const User = require("./models/User");
const Portfolio = require("./models/Portfolio");
const cors = require("cors");
app.use(cors());

const { getAllPost } = require("./controllers/PostController");
const { getAllUser } = require("./controllers/UserController");
const { getAllPortfolio } = require("./controllers/PortfolioController");

app.listen(5000, () => {
  console.log("app is running");
});

app.get("/post", getAllPost);
app.get("/user", getAllUser);
app.get("/portfolio", getAllPortfolio);

mongoose
  .connect(process.env.mongoUri)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server running on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error on database", error);
  });
