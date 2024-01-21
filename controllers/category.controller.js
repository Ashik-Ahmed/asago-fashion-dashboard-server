const { createNewCategoryService, deleteCategoryByIdService, getCategoryByIdService, getAllCategoriesService } = require("../services/category.service");

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

exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await getCategoryByIdService(id);
        if (category?._id) {
            res.status(200).json({
                status: 'Success',
                data: category
            })
        } else {
            res.status(400).json({
                status: 'Failed',
                error: 'Category not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await getCategoryByIdService(id);

        if (category?._id) {
            res.status(200).json({
                status: 'Success',
                data: category
            })
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'No Category found'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await getAllCategoriesService();
        if (categories?.length > 0) {
            res.status(200).json({
                status: 'Success',
                data: categories
            })
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'No Category found'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.deleteCategoryById = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await getCategoryByIdService(id);

        if (category) {

            const isCategoryDeleted = await deleteCategoryByIdService(id);

            if (isCategoryDeleted?.deletedCount > 0) {
                res.status(200).json({
                    status: 'Success',
                    data: isCategoryDeleted
                })

            } else {
                res.status(400).json({
                    status: 'Failed',
                    error: 'Category not deleted'
                })
            }
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'No Category found'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}