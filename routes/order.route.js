const express = require('express');
const orderController = require('../controllers/order.controller');

const router = express.Router();

router.route('/')
    .post((orderController.createNewOrder))

module.exports = router;