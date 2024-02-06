const Inventory = require("../models/Inventory");
const Product = require("../models/Product");

exports.createNewInventoryService = async (inventoryData) => {
    const newInventory = await Inventory.create(inventoryData);
    return newInventory;
}

exports.getAllInventoriesService = async () => {
    const inventories = await Inventory.find({}).populate('productId', "title");
    return inventories;
}

exports.getInventoryByProductSKUService = async (productSKU) => {
    const inventory = await Product.findOne({ sku: productSKU }, { inventory: 1, _id: 0, title: 1, "images.titleImage": 1, slug: 1 }).populate('inventory', 'stock');
    return inventory;
}