const Post = require("../models/Post");

exports.singlePost = (req, res) => {
    const postid = req.params.postid;
    if (!postid) {
        return res.status(400).json({
            message: "post not found"
        });
    }

    Post.update({
        _id: postid
    }, {
        $inc: {
            visited: 1
        }
    }).then((post) => {

        Post.find({
            _id: postid
        }).then((post) => {
            return res.status(400).json(post);
        }).catch((err) => {
            return res.status(400).json({
                message: "not found"
            });
        })

    }).catch((err) => {
        res.status(400).json({
            message: "post not found"
        })
    });


}