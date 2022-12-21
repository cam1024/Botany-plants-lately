const axios = require("axios");

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
          q: searchTerm,
          token: apiKey,
        },
      });

      // Send the response data to the client
      res.send(response.data);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
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
          token: apiKey,
        },
      });

      // Send the response data to the client
      res.send(response.data);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
};
