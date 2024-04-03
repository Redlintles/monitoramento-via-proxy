const Product = require("../../models/Product");
const validateUUID = require("../../utils/validateUUID");



const deleteProduct = async (req,res) => {
    const {id} = req.params;

    try {
        validateUUID(id);
        const prod = await Product.fetchById(id);
        await Product.deleteById(id);
        return res.status(200).render("success", {
            message: `Produto ${id} removido com sucesso`,
            prod
        })
    } catch(error) {
        return res.status(400).render("badRequest",{error})
    }

}

module.exports = deleteProduct