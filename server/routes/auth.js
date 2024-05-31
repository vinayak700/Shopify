const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const { loginCheck, isAuth, isAdmin } = require("../middleware/auth");

router.post("/isadmin", authController.isAdmin);
router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.post("/user", loginCheck, isAuth, isAdmin, authController.allUser);

module.exports = router;
