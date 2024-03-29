const Order = require("../models/Order");

exports.createNewOrderService = async (orderData) => {
    const newOrder = await Order.create(orderData);
    return newOrder;
}

exports.getOrderByIdService = async (orderId) => {
    const order = await Order.findOne({ _id: orderId });
    return order;
}

exports.getAllOrdersService = async (query) => {
    const orders = await Order.find(query);
    return orders;
}

exports.getMyOrdersService = async (customerEmail) => {
    const orders = await Order.find({ customerEmail });
    return orders;
}