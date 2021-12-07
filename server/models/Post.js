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
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Post", PostSchema);