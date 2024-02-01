const Category = require("../models/Category");
const Product = require("../models/Product");

exports.createNewProductService = async (productData) => {
    const newProduct = await Product.create(productData);
    if (!newProduct) {
        return null;
    }
    else {
        const insertToCategory = await Category.updateOne({ _id: productData.category }, { $push: { products: newProduct._id } });

        if (insertToCategory.nModified === 0) {
            await Product.deleteOne({ _id: newProduct._id });
            return null;
        }
    }
    return newProduct;
}

exports.getProductByIdService = async (productId) => {
    const product = await Product.findOne({ _id: productId });
    return product;
}

exports.getProductBySlugService = async (slug) => {
    const product = await Product.findOne({ slug });
    return product;
}

exports.getAllProductsService = async () => {
    const products = await Product.find({});

    return products;
}

exports.updateProductByIdService = async (productId, productData) => {
    const updateProduct = await Product.updateOne({ _id: productId }, { $set: productData });
    return updateProduct;
}

exports.deleteProductByIdService = async (productId) => {
    const deleteProduct = await Product.deleteOne({ _id: productId });
    return deleteProduct;
}