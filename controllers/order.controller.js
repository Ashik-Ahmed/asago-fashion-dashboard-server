const Order = require("../models/Order");
const { getAllOrdersService } = require("../services/order.service");

exports.createNewOrder = async (req, res) => {
    try {
        const orderData = req.body;
        const newOrder = await Order.create(orderData);

        if (newOrder?._id) {
            res.status(201).json({
                status: 'Success',
                data: newOrder
            })
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'Order Failed'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await getAllOrdersService();

        if (orders.length > 0) {
            res.status(200).json({
                status: 'Success',
                data: orders
            })
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'No orders found'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}