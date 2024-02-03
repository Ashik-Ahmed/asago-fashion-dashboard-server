const express = require('express');

const router = express.Router();

router.route('/')
    .post((orderController.createNewOrder))

module.exports = router;