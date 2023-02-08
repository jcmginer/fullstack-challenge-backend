const cors = require('cors');
const express = require('express');
const userRouter = require("./routes/users.routes");



const app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);


module.exports = app;