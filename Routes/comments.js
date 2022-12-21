// routes/comments.js
const express = require('express'); // import the express module
const router = express.Router(); // create a router object using express.Router()
const authMiddleware = require('../middleware/auth'); // import the authMiddleware function
const commentsController = require('../controllers/commentsController'); // import the commentsController object

router.get('/comments', authMiddleware, commentsController.getComments); // define a route for displaying the comments page
router.post('/comments', authMiddleware, commentsController.createComment); // define a route for handling form submissions

module.exports = router; // export the router object
