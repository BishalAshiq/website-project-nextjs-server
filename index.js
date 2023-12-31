const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const Post = require("./models/Post");
const Portfolio = require("./models/Portfolio");
const User = require("./models/User");
const Register = require("./models/Register");
const cors = require("cors");
app.use(cors());

const { getAllPost } = require("./controllers/PostController");
const { getAllPortfolio } = require("./controllers/PortfolioController");
const { registerUser, loginUser } = require("./controllers/AuthController");

app.listen(5000, () => {
  console.log("app is running");
});

app.get("/post", getAllPost);
app.get("/portfolio", getAllPortfolio);
app.get("/register", registerUser);
app.post("/login", loginUser);

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
