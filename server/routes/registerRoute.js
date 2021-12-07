const router = require("express").Router();
const User = require("../models/User");
const {
    register
} = require("../controllers/register");


router.post("/register", register);

module.exports = router;