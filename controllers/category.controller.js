const { createNewCategoryService } = require("../services/category.service");

exports.createNewCategory = async (req, res) => {
    try {
        const categoryData = req.body;

        const isCategoryCreated = await createNewCategoryService(categoryData);


        if (isCategoryCreated?._id) {
            res.status(200).json({
                status: 'Success',
                data: isCategoryCreated
            })
        } else {
            res.status(400).json({
                status: 'Failed',
                error: 'Category not created'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}