const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

// GET / - display the home page
router.get("/", indexController.displayHomePage);

module.exports = router;
