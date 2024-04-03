const Product = require("../../models/Product");
const validateUUID = require("../../utils/validateUUID");

const editProduct = async (req,res) => {
    try {
        const {id} = req.params;
        validateUUID(id);

        const prod = await Product.editById(id,req.body)

        return res.status(200).render("success",{
            message: `Product ${id} Updated Succesfuly`,
            prod
        })
    } catch (error) {
        return res.status(400).render("badRequest",{error})
    }
    
}

module.exports = editProduct

