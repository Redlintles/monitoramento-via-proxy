const genericModel = require("./genericModel");
const pathUtil = require("../utils/path");
const path = require("path");
const validateObj = require("../utils/validateObj");

class Product extends genericModel {
    static queryFile = path.join(pathUtil,"/data/","product.csv")
    constructor(data) {
        super();
        const headers = "name,desc,category,price,seller,stars,add-date".split(",");
        validateObj(headers,data);
        const {name,desc,category,price,seller,stars,"add-date": addDate} = data;
        this.saveData = `${this.id},${name},${desc},${category},${price},${seller},${stars},${addDate}\n`;

    }
}

module.exports = Product;