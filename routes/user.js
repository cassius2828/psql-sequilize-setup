const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

// Register user
router.get("/", userCtrl.getUser);
router.get("/artwork", userCtrl.createArtwork);
router.get("/create-db", userCtrl.createDb);

module.exports = router;
