const path = require('path');

module.exports = {
  entry: './testsum.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};