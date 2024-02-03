const express = require('express');
const orderController = require('../controllers/order.controller');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.route('/my-orders')
    .get(verifyToken, orderController.getMyOrders)

router.route('/')
    .get(orderController.getAllOrders)
    .post(orderController.createNewOrder)

router.route('/:id')
    .get(orderController.getOrderById)

module.exports = router;