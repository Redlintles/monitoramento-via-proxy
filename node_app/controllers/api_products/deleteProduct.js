const Product = require("../../models/Product");
const validateUUID = require("../../utils/validateUUID");



const deleteProduct = async (req,res) => {
    const {id} = req.params;

    try {
        validateUUID(id);
        Product.deleteById(id);
        return res.status(200).json({
            "message": "Product deleted succesfully",
            id
        })
    } catch(error) {
        return res.status(400).json({
            error
        })
    }

}

module.exports = deleteProduct