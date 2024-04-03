const express = require("express");
const addProduct = require("../controllers/monolith_products/addProduct");
const editProduct = require("../controllers/monolith_products/editProduct");
const deleteProduct = require("../controllers/monolith_products/deleteProduct");
const productList = require("../controllers/monolith_products/productList");
const router = express.Router();

router.get("/list",productList);
router.post("/add", addProduct);
router.get("/delete/:id",deleteProduct);
router.post("/edit/:id", editProduct);


module.exports = router;