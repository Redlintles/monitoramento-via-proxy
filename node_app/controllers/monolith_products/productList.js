const Product = require("../../models/Product");

const productList = async (req,res) => {
    const data = await Product.fetchAll();
    return res.status(200).render("prods",{
        products: data,
        less: req.query.less == "" ? true : false
    })
}

module.exports = productList;