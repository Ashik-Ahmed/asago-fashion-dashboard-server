const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json("hello product api endpoint")
    })

module.exports = router;