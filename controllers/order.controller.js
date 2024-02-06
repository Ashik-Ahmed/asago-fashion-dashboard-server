const Order = require("../models/Order");
const { getAllOrdersService, getOrderByIdService, getMyOrdersService } = require("../services/order.service");

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

exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const order = await getOrderByIdService(id);
        // console.log(order);
        if (order?._id) {
            res.status(200).json({
                status: 'Success',
                data: order
            })
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'Order not found'
            })
        }
    }
    catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.getAllOrders = async (req, res) => {
    try {
        const query = req.query;
        const orders = await getAllOrdersService(query);

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

exports.getMyOrders = async (req, res) => {
    try {
        const myOrders = await getMyOrdersService(req?.user?.email);

        if (myOrders.length > 0) {
            res.status(200).json({
                status: 'Success',
                data: myOrders
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