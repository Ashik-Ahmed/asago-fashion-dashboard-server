const express = require("express")
const userController = require("../controllers/user.controller.js");
const authorization = require("../middleware/authorization.js");

const router = express.Router();

router.route("/")
    .post(userController.createUser)
    .get(userController.getAllUsers)

router.route('/:email')
    .get(userController.getUserById)


module.exports = router;