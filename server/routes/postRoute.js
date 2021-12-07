const router = require("express").Router();
const User = require("../models/Post");
const {
    post
} = require("../controllers/post");

router.post("/post", post);
module.exports = router;