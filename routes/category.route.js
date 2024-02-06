const express = require('express');
const categoryController = require('../controllers/category.controller');
const verifyToken = require('../middleware/verifyToken');
const authorization = require('../middleware/authorization');

const router = express.Router();

router.route('/')
    .post(verifyToken, authorization("Admin"), categoryController.createNewCategory)
    .get(verifyToken, categoryController.getAllCategories)

router.route('/:id')
    .get(verifyToken, categoryController.getCategoryById)
    .delete(verifyToken, authorization("Admin"), categoryController.deleteCategoryById)

module.exports = router;