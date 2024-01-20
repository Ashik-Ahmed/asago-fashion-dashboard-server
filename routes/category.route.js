const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.route('/')
    .post(categoryController.createNewCategory)

module.exports = router;