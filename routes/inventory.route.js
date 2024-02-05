const express = require('express');
const inventoryController = require('../controllers/inventory.controller');

const router = express.Router();

router.route('/')
    .post(inventoryController.createNewInventory)

module.exports = router;