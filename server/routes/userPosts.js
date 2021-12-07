const router = require("express").Router();
const Post = require("../models/Post");
const {
    userPosts
} = require("../controllers/userPosts");


router.get("/posts/:userid", userPosts);

module.exports = router;