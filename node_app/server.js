const express = require("express");
const app = express();
require("dotenv").config()
const {homeController} = require("./controllers/home");
const apiProdsRouter = require("./routes/apiProdsRouter");
const monolithProdsRouter = require("./routes/monolithProdsRouter")
const bodyParser = require("body-parser");
const {PORT} = process.env;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded());
// app.use(express.json());
app.use(express.static("static"));

app.use("api/products",apiProdsRouter);
app.use("/products", monolithProdsRouter)
app.use("/", homeController)

app.listen(PORT,() => {
    console.log("Server is running!");
})