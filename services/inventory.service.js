const Inventory = require("../models/Inventory");

exports.createNewInventoryService = async (inventoryData) => {
    const newInventory = await Inventory.create(inventoryData);
    return newInventory;
}

exports.getAllInventoriesService = async () => {
    const inventories = await Inventory.find({}).populate('productId', "title");
    return inventories;
}

exports.getInventoryByProductIdService = async (productId) => {
    const inventory = await Inventory.findOne({ productId: productId });
    console.log(inventory);
    return inventory;
}