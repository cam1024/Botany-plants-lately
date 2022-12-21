const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET /users/:id - get information about a specific user
router.get("/users/:id", userController.getUser);

// PUT /users/:id - update information about a specific user
router.put("/users/:id", userController.updateUser);

// DELETE /users/:id - delete a specific user
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
