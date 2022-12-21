const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require('../middleware/auth'); // import the authMiddleware function

// POST /register - register a new user
router.post("/register", authMiddleware, authController.register); // add authMiddleware function to the register route

// POST /login - login an existing user
router.post("/login", authMiddleware, authController.login); // add authMiddleware function to the login route

// POST /logout - logout the current user
router.post("/logout", authMiddleware, authController.logout); // add authMiddleware function to the logout route

module.exports = router;