const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    'main': './index.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  plugins: [
    new require('copy-webpack-plugin')([
      { from: './index.html' }
    ])
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}
