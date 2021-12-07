const router = require("express").Router();
const Post = require("../models/Post");
const {
    singlePost
} = require("../controllers/singlePost");


router.put("/post/:postid", singlePost);

module.exports = router;