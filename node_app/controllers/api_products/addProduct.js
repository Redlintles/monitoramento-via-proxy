const Product = require("../../models/Product");

const addProduct = async (req,res) => {
    try {
        const prod = {
            ...req.body,
            "add-date": (new Date().toDateString())
        }

        const p = new Product(prod); 
        p.save();
        res.status(200).json({
            message: "Product Added Succesfully",
            product: {
                ...prod
            }
        })
    } catch(error) {
        return res.status(400).json({
            error,
            message: "Internal Server error"
        })
    }
}

module.exports = addProduct;