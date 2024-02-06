const express = require('express');
const inventoryController = require('../controllers/inventory.controller');

const router = express.Router();

router.route('/:productSKU')
    .get(inventoryController.getInventoryByProductSKU)

router.route('/')
    .post(inventoryController.createNewInventory)
    .get(inventoryController.getAllInventories)

module.exports = router;