const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.route('/')
    .post(categoryController.createNewCategory)

router.route('/:id')
    .get(categoryController.getCategoryById)
    .delete(categoryController.deleteCategoryById)

module.exports = router;