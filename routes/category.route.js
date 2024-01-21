const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.route('/')
    .post(categoryController.createNewCategory)

router.route('/:id')
    .delete(categoryController.deleteCategoryById)

module.exports = router;