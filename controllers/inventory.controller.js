const Inventory = require("../models/Inventory");
const Product = require("../models/Product");
const { createNewInventoryService, getAllInventoriesService } = require("../services/inventory.service");

exports.createNewInventory = async (req, res) => {
    try {
        const inventoryData = req.body;

        const newInventory = await createNewInventoryService(inventoryData);

        if (newInventory?._id) {

            const { _id } = newInventory;
            // update the product with inventory data
            const product = await Product.updateOne({ _id: inventoryData.productId }, { inventory: _id })

            if (product.nModified === 0) {
                // if product is not updated with inventory then delete the inventory
                await Inventory.deleteOne({ _id: _id });

                res.status(400).json({
                    status: 'Failed',
                    error: 'Inventory Creation Failed'
                })
            }
            else {
                res.status(201).json({
                    status: 'Success',
                    data: newInventory
                })
            }

        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'Inventory Creation Failed'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.getAllInventories = async (req, res) => {
    try {
        const inventories = await getAllInventoriesService();

        if (inventories) {
            res.status(200).json({
                status: 'Success',
                data: inventories
            })
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'No inventories found'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}
