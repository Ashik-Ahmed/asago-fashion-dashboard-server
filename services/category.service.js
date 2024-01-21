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