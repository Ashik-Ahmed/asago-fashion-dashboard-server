const { default: mongoose } = require('mongoose');
const Category = require('../models/Category');

exports.createNewCategoryService = async (categoryData) => {
    const category = await Category.create(categoryData);

    if (categoryData?.parentCategory) {
        const pushToParentCategory = await Category.updateOne(
            { _id: categoryData.parentCategory },
            { $push: { subCategories: { categoryId: category._id, categoryName: category.categoryName } } }
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

exports.getAllCategoriesService = async () => {
    const categories = await Category.find(
        { parentCategory: null },
        { categoryName: 1, subCategories: 1 }
    ).populate({
        path: 'subCategories.categoryId',
        select: 'subCategories',
        populate: {
            path: 'subCategories.categoryId',
            select: 'subCategories',
            populate: {
                path: 'subCategories.categoryId',
                select: 'subCategories',
                populate: {
                    path: 'subCategories.categoryId',
                    select: 'subCategories'
                }
            },
        },
    },
    );
    return categories;
}

exports.deleteCategoryByIdService = async (categoryId) => {
    const deleteCategory = await Category.deleteOne({ _id: categoryId });
    console.log(deleteCategory);
    if (deleteCategory.deletedCount > 0) {
        const removeFromSubCategories = await Category.updateMany(
            {},
            {
                $pull: {
                    subCategories: { categoryId },
                },
            },
            { multi: true }
        );

        if (removeFromSubCategories.modifiedCount == 0) {
            return null;
        }
    }
    return deleteCategory;
}
