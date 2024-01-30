const { createNewProductService, deleteProductByIdService, getProductByIdService, getAllProductsService, updateProductByIdService } = require("../services/product.service");

exports.createNewProduct = async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = await createNewProductService(productData);

        if (newProduct?._id) {
            res.status(201).json({
                status: 'Success',
                data: newProduct
            })
        } else {
            res.status(400).json({
                status: 'Failed',
                error: 'Product not created'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.getProductById = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await getAllProductsService();

        if (products) {
            res.status(200).json({
                status: 'Success',
                data: products
            })
        } else {
            res.status(400).json({
                status: 'Failed',
                error: 'No product found'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;

        const result = await updateProductByIdService(id, productData);

        if (result?.modifiedCount > 0) {
            res.status(200).json({
                status: 'Success',
                data: result
            })
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'Failed to update product'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getProductByIdService(id);
        if (product?._id) {
            const deleteProduct = await deleteProductByIdService(id);

            const removeProductFromCategory = await Category.updateOne({ _id: deleteProduct?.category }, { $pull: { products: deleteProduct?._id } });

            console.log(removeProductFromCategory);

            if (removeProductFromCategory.nModified === 0) {
                res.status(400).json({
                    status: 'Failed',
                    error: 'Product not removed from category'
                })
            }
            else {
                res.status(200).json({
                    status: 'Success',
                    data: deleteProduct
                })
            }
            res.status(200).json({
                status: 'Success',
                data: deleteProduct
            })
        } else {
            res.status(400).json({
                status: 'Failed',
                error: 'No product found'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}