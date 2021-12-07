const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userid: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    visited: {
        type: Number,
        default: 0
    },
    to: {
        type: String,
        require: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Post", PostSchema);