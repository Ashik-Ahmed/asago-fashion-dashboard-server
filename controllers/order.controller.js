const Order = require("../models/Order");

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