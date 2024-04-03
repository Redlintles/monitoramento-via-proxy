const path = require("path")
const Name = require("../models/name");

const homeController = async (req,res) => {
    return res.render("index");
}

module.exports = {
    homeController
}