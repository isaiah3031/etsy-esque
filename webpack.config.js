var path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './app/javascript/packs/hello_react.jsx',
    './frontend/*'
  ],
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
};
