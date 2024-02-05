const { createNewInventoryService } = require("../services/inventory.service");

exports.createNewInventory = async (req, res) => {
    try {
        const inventoryData = req.body;

        const newInventory = await createNewInventoryService(inventoryData);

        if (newInventory?._id) {
            res.status(201).json({
                status: 'Success',
                data: newInventory
            })
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