const connection = require("./src/database/connection");
const dotenv = require("dotenv");
const app = require("./src/server");

dotenv.config();

connection();

app.listen(process.env.PORT, () => {
    console.log("Server runing at" + " " + process.env.PORT);
})