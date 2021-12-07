const router = require("express").Router();
const User = require("../models/User");
const {
    login
} = require("../controllers/login");

router.get("/login", login);
module.exports = router;