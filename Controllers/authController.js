const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth"); // import the authMiddleware function

module.exports = {
  login: (req, res) => {
    const { email, password } = req.body; // Destructuring to get the email and password from the request body
  
    User.findOne({ email }) // Find a user with the given email
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: 'Incorrect email or password' }); // If no user is found, send a 401 status with a message
        }
  
        user.comparePassword(password, (err, isMatch) => { // Compare the given password with the user's hashed password
          if (err) { // If there was an error, send a 500 status with the error message
            return res.status(500).json({ message: err.message });
          }
  
          if (!isMatch) { // If the passwords do not match, send a 401 status with a message
            return res.status(401).json({ message: 'Incorrect email or password' });
          }
  
          const token = user.generateJWT(); // If the passwords match, generate a JSON web token and send it in the response
          res.json({ message: 'Successfully logged in', token });
        });
      })
      .catch((err) => { // If there was an error finding the user, send a 500 status with the error message
        res.status(500).json({ message: err.message });
      });
  },
  egister: (req, res) => {
    // Code for the register function goes here
  },
  logout: (req, res) => {
    // Code for the logout function goes here
  },
};
// POST /register - register a new user
router.post("/register", authMiddleware, module.exports.register); // add authMiddleware function to the register route

// POST /login - login an existing user
router.post("/login", authMiddleware, module.exports.login); // add authMiddleware function to the login route

// POST /logout - logout the current user
router.post("/logout", authMiddleware, module.exports.logout); // add authMiddleware function to the logout route

module.exports = router; 