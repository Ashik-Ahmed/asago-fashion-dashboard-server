const { createNewProductService } = require("../services/product.service");

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