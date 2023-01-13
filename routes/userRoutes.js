const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJWT");

// router.use(verifyJWT);

router.post("/", userController.createNewUser);
router.get("/getUser", verifyJWT, userController.getUserById);

router.patch("/", verifyJWT, userController.updateUser);
router.delete("/", verifyJWT, userController.deleteUser);

module.exports = router;
