const Post = require("../models/Post");

exports.userPosts = (req, res) => {
    const userid = req.params.userid;
    console.log(process.env.port);
    Post.find({
        userid: userid
    }).then((posts) => {
        return res.status(400).json(posts);
    }).catch((err) => {
        return res.status(400).json({
            message: "no post found"
        });
    })
}