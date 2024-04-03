const Product = require("../../models/Product");

const productList = async (req,res) => {
    const data = await Product.fetchAll();
    res.status(200).json({
        message: "Products Fetched Succesfully",
        products: data
    })
}

module.exports = productList;