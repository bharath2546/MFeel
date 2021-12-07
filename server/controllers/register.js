const User = require("../models/User");

const key = process.env.key;

exports.register = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                message: `Not able to create user ${err}`
            })
        }
        res.json(user);
    })
}