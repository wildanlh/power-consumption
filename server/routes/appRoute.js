const express = require("express");
const router = express.Router();
const appTarget = require("../controllers/appController");

router.get("/power-usage/:appName", appTarget);

module.exports = router;
