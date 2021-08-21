const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Post = require("../models/Post");

/*const allowedOrigins = ["http://localhost"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed"));
    }
  },
};*/

router.use(cors());
router.use(bodyParser.json());

router.get("/",  async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/",  async (req, res) => {
  const post = new Post({
    name: req.body.name,
    surname: req.body.surname,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
