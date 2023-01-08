module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // The custom helper 'format_date' takes in a timestamp
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
};
