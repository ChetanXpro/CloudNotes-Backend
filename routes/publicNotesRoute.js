const express = require("express");

const router = express.Router();
// const noteController = require("../controllers/publicNoteController");
const verifyJWT = require("../middleware/verifyJWT");
router.use(verifyJWT);

// router.get("/", noteController.getNotes);
module.exports = router;
