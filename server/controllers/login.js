const User = require("../models/User");

exports.login = async (req, res) => {

    const {
        username,
        password
    } = req.body;

    await User.find({
            username: username
        }).then((user) => {
            return res.status(400).json({
                message: "found"
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "user not found"
            })
        })
}