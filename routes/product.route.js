const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.route('/')
    .post(productController.createNewProduct)

router.route('/:id')
    .get(productController.getProductById)
    .delete(productController.deleteProductById)

module.exports = router;