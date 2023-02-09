const cors = require('cors');
const express = require('express');
const fileUpload = require("express-fileupload");
const userRouter = require("./routes/users.routes");
const gifFileRouter = require("./routes/gifFiles.routes");


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.search(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
app.use("/api/user", userRouter);
app.use("/api/gifFile", gifFileRouter);


module.exports = app;