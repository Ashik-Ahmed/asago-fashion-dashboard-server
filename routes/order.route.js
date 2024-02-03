const express = require('express');
const orderController = require('../controllers/order.controller');

const router = express.Router();

router.route('/')
    .get((orderController.getAllOrders))
    .post((orderController.createNewOrder))

module.exports = router;