const { default: mongoose } = require('mongoose');
const Category = require('../models/Category');

exports.createNewCategoryService = async (categoryData) => {
    const category = await Category.create(categoryData);

    if (categoryData?.parentCategory) {
        const pushToParentCategory = await Category.updateOne(
            { _id: categoryData.parentCategory },
            { $push: { subCategories: category._id } }
        );

        if (pushToParentCategory.nModified === 0) {
            await Category.deleteOne({ _id: category._id });

            return null;
        }
    }

    return category;
}

exports.getCategoryByIdService = async (categoryId) => {
    const category = await Category.findOne({ _id: categoryId });
    return category;
}

exports.deleteCategoryByIdService = async (categoryId) => {
    const deleteCategory = await Category.deleteOne({ _id: categoryId });
    if (deleteCategory.deletedCount > 0) {
        await Category.updateMany({ parentCategory: categoryId }, { $pull: { parentCategory: categoryId } });
    }
    return deleteCategory;
}
