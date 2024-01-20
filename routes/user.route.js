const express = require("express")
const userController = require("../controllers/user.controller.js");
const authorization = require("../middleware/authorization.js");
const verifyToken = require("../middleware/verifyToken.js");

const router = express.Router();

router.post("/login", userController.login);
router.get("/get-loggedin-user", verifyToken, userController.getLoggedInUser);

router.route("/")
    .post(verifyToken, authorization("Admin"), userController.createUser)
    .get(verifyToken, authorization("Admin"), userController.getAllUsers)

router.route('/:email')
    .get(userController.getUserByEmail)


module.exports = router;