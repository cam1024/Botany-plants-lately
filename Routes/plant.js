const express = require("express");
const router = express.Router();
const plantController = require("../controllers/plantController");

// GET /plants - search for plants
router.get("/plants", plantController.searchPlants);

// GET /plants/:id - get information about a specific plant
router.get("/plants/:id", plantController.getPlant);

module.exports = router;
