const Category = require('../models/Category');

exports.createNewCategoryService = async (categoryData) => {
    const category = await Category.create(categoryData);
    return category;
}