var path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sample.bundle.js'
  },
  devtool: "cheap-eval-source-map"
};