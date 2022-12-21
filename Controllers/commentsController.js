// controllers/commentsController.js
const Comment = require('../models/comment'); // import the Comment model
exports.getComments = async (req, res) => { // define the getComments controller function
    try {
      const comments = await Comment.find({}); // fetch all comments from the database
      res.render('comments', { comments }); // render the comments template with the comments data
    } catch (error) {
      console.error(error); // log any errors to the console
      res.status(500).json({ message: 'Server error' }); // return a server error response
    }
  };
  exports.createComment = async (req, res) => { // define the createComment controller function
    try {
      const comment = new Comment({ // create a new Comment object
        user: req.user.id, // set the user property to the user ID from the request object
        text: req.body.comment // set the text property to the comment text from the request body
      });
      await comment.save(); // save the comment to the database
      res.json({ message: 'Comment saved' }); // return a success message to the client
    } catch (error) {
      console.error(error); // log any errors to the console
      res.status(500).json({ message: 'Server error' }); // return a server error response
    }
  };
    