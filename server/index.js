const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");

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


app.listen(5000, () => {
    console.log("server is running", PORT);
})