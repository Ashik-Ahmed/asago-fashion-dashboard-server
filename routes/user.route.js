const express = require("express")
const userController = require("../controllers/user.controller.js");

const router = express.Router();

router.route("/")
    .post(userController.createUser)
    .get((req, res) => {
        res.json("hello user api endpoint")
    })


module.exports = router;