const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json("hello inventory api endpoint")
    })

module.exports = router;