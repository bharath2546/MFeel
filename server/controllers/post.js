const Post = require("../models/Post");

exports.post = (req, res) => {

    const newPost = new Post(req.body);
    newPost.save((err, newPost) => {
        if (err) {
            return res.status(400).json({
                message: `Not able to create user ${err}`
            })
        }
        res.json(newPost);
    })
}