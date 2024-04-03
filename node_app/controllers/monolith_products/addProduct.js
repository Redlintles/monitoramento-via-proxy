const Product = require("../../models/Product");

const addProduct = async (req,res) => {
    try {
        const prod = {
            ...req.body,
            "add-date": (new Date().toDateString())
        }
        const p = new Product(prod); 
        p.save();

        return res.status(200).render("success",{
            message: "Produto adicionado com sucesso",
            prod
        });
    } catch(error) {
        return res.status(400).render("badRequest", {error});
    }
}

module.exports = addProduct;