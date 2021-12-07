const router = require("express").Router();
const User = require("../models/Post");
const {
    allPost
} = require("../controllers/allPost");
router.get("/Posts", allPost);
module.exports = router;