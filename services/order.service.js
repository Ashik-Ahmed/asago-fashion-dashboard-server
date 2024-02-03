const Order = require("../models/Order");

exports.createNewOrderService = async (orderData) => {
    const newOrder = await Order.create(orderData);
    return newOrder;
}

exports.getAllOrdersService = async () => {
    const orders = await Order.find({});
    return orders;
}