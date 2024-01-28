const express = require('express');
const productController = require('../controllers/product.controller');
const authorization = require("../middleware/authorization.js");
const verifyToken = require("../middleware/verifyToken.js");

const router = express.Router();

router.route('/')
    .get(productController.getAllProducts)
    .post(verifyToken, authorization("Admin"), productController.createNewProduct)

router.route('/:id')
    .get(productController.getProductById)
    .delete(productController.deleteProductById)

module.exports = router;