const express = require("express")

const router = express.Router();

router.route("/")
    .get((req, res) => {
        res.json("hello user api endpoint")
    })


module.exports = router;