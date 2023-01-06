const axios = require("axios");
const router = express.Router();
const express = require("express");

module.exports = {
  searchPlants: async (req, res) => {
    try {
      // Set the API endpoint URL
      const apiUrl = "https://trefle.io/api/plants";

      // Set the API key
      const apiKey = process.env.TREFLE_API_KEY;

      // Set the search term
      const searchTerm = req.query.q;

      // Make the request to the API
      const response = await axios.get(apiUrl, {
        params: {
          q: searchTerm, // Query parameter for the search term
          token: apiKey, // Query parameter for the API key
        },
      });

      // Send the response data to the client
      res.send(response.data);
    } catch (error) {
      console.error(error);
      res.sendStatus(500); // Send a status code of 500 if there was an error
    }
  },

  getPlant: async (req, res) => {
    try {
      // Set the API endpoint URL
      const apiUrl = `https://trefle.io/api/plants/${req.params.id}`;

      // Set the API key
      const apiKey = process.env.TREFLE_API_KEY;

      // Make the request to the API
      const response = await axios.get(apiUrl, {
        params: {
          token: apiKey, // Query parameter for the API key
        },
      });

      // Send the response data to the client
      res.send(response.data);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);  // Send a status code of 500 if there was an error
    }
  },
};
// GET /plants - search for plants
router.get("/plants", module.exports.searchPlants);

// GET /plants/:id - get information about a specific plant
router.get("/plants/:id", module.exports.getPlant);

module.exports = router;