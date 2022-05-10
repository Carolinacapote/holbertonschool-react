const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
};
