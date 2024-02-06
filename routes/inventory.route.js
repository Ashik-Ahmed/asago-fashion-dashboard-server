const express = require('express');
const inventoryController = require('../controllers/inventory.controller');

const router = express.Router();

router.route('/:productId')
    .get(inventoryController.getInventoryByProductId)

router.route('/')
    .post(inventoryController.createNewInventory)
    .get(inventoryController.getAllInventories)

module.exports = router;