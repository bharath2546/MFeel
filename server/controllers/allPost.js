const Post = require("../models/Post");

exports.allPost = async (req, res) => {
    Post.find({}).then((posts) => {
            return res.status(400).json(
                posts
            );
        })
        .catch((err) => {
            res.status(400).json({
                message: "Post not found"
            })
        })
}