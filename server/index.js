const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const postRoute = require("./routes/postRoute");
const allPostRoute = require("./routes/allPostRoute");
const singlePostRoute = require("./routes/singlePostRoute");
const userPosts = require("./routes/userPosts");


dotenv.config({
    path: "./config.env"
});
const PORT = process.env.PORT || 8000;
app.use(express.json());


mongoose.connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("connected to mongodb");
    }).catch((err) => {
        console.log(err);
    });

app.use("/api", registerRoute);
app.use("/api", loginRoute);
app.use("/api", postRoute);
app.use("/api", allPostRoute);
app.use("/api", singlePostRoute);
app.use("/api", userPosts);


app.listen(5000, () => {
    console.log("server is running", PORT);
})