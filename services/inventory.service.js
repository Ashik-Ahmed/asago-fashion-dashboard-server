const Inventory = require("../models/Inventory");

exports.createNewInventoryService = async (inventoryData) => {
    const newInventory = await Inventory.create(inventoryData);
    return newInventory;
}