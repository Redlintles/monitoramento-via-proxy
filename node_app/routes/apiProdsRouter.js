const express = require("express");
const productList = require("../controllers/api_products/productList");
const addProduct = require("../controllers/api_products/addProduct");
const deleteProduct = require("../controllers/api_products/deleteProduct");
const editProduct = require("../controllers/api_products/editProduct");
const router = express.Router();

router.get("/list",productList);
router.post("/add", addProduct);
router.delete("/delete/:id",deleteProduct);
router.put("/edit/:id", editProduct);

module.exports = router;