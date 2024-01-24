const Product = require("../models/Product");

exports.createNewProductService = async (productData) => {
    const newProduct = await Product.create(productData);
    return newProduct;
}