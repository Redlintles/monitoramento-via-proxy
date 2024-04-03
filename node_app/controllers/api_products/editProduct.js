const Product = require("../../models/Product");
const validateUUID = require("../../utils/validateUUID");

const editProduct = async (req,res) => {
    try {
        const {id} = req.params;
        validateUUID(id);

        Product.editById(id,req.body)

        res.status(200).json({
            message: "Product Updated Succesfuly",
            product: req.body
        })
    } catch (err) {

    }
    
}

module.exports = editProduct

